import React from "react";
import { FiClock, FiMapPin, FiCalendar, FiPlus } from "react-icons/fi";

const EventCard = ({ event }) => {
  const monthMap = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };


  const parseEventDate = (event) => {
    const [time, period] = event.time.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (period.toLowerCase() === "pm" && hours !== 12) hours += 12;
    if (period.toLowerCase() === "am" && hours === 12) hours = 0;

    return new Date(
      2025,
      monthMap[event.date.month],
      event.date.day,
      hours,
      minutes,
    );
  };


  const formatDateLocal = (date) => {
    const pad = (n) => String(n).padStart(2, "0");

    return (
      date.getFullYear() +
      pad(date.getMonth() + 1) +
      pad(date.getDate()) +
      "T" +
      pad(date.getHours()) +
      pad(date.getMinutes()) +
      pad(date.getSeconds())
    );
  };


  const generateICS = (event) => {
    const start = parseEventDate(event);
    const end = new Date(start.getTime() + 60 * 60 * 1000);

    return [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@puc-events`,
      `DTSTAMP:${formatDateLocal(new Date())}`,
      `DTSTART:${formatDateLocal(start)}`,
      `DTEND:${formatDateLocal(end)}`,
      `SUMMARY:${event.title}`,
      `LOCATION:${event.location}`,
      `DESCRIPTION:${event.description || ""}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n"); 
  };

  const downloadICS = (event) => {
    const ics = generateICS(event);

    const blob = new Blob([ics], {
      type: "text/calendar;charset=utf-8;",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${event.title.replace(/[^a-z0-9]/gi, "_")}.ics`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Date */}
      <div className="flex items-center justify-between mb-4">
        <div className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-center">
          <p className="text-lg font-bold">{event.date.day}</p>
          <p className="text-xs uppercase">{event.date.month}</p>
        </div>

        <span className="text-xs text-gray-400">PUC Washington DC</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary">
        {event.title}
      </h3>

      {/* Info */}
      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FiClock className="text-red-600" />
          {event.time}
        </div>

        <div className="flex items-center gap-2">
          <FiMapPin className="text-red-600" />
          {event.location}
        </div>

        <div className="flex items-center gap-2">
          <FiCalendar className="text-red-600" />
          {event.date.day} {event.date.month}
        </div>
      </div>

      {/* Description */}
      {event.description && (
        <p className="mt-4 text-sm text-gray-500">{event.description}</p>
      )}

      {/* CTA */}
      <button
        onClick={() => downloadICS(event)}
        className="mt-5 w-full py-2 rounded-lg bg-red-700 text-white text-sm font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2"
      >
        <span className="flex items-center gap-1">
          <FiCalendar />
          <FiPlus size={14} />
        </span>
        Add to Calendar
      </button>
    </div>
  );
};

export default EventCard;
