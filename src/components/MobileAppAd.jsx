import React from "react";
import { FaGooglePlay } from "react-icons/fa";

const MobileAppAd = () => {
  return (
    <div className="bg-red-800 px-6 md:px-10 py-16 md:py-22 text-center text-white ">
      <div className="w-full text-center bg-neutral-primary-soft p-6 md:p-12 rounded-base shadow-xs container mx-auto flex flex-col items-center">
        <h5 className="mb-3 text-3xl  tracking-tight font-semibold text-heading">
          Stay Connected While You Travel Abroad
        </h5>

        <p className="mb-6 text-sm text-center wrap-anywhere sm:text-lg max-w-3xl place-item-center ">
          Stay connected wherever you travel with the Presby Connect App. Join
          the Presbyterian Church of Ghana’s overseas community, find local PCG
          churches abroad, and stay supported in your faith.
          <br />
          Download the app today.
        </p>

        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          {/* Apple */}
          <a
            href="#"
            className="w-full border rounded-full  sm:w-auto bg-dark hover:bg-dark-strong focus:ring-4 focus:outline-none focus:ring-neutral-quaternary text-white rounded-base inline-flex items-center justify-center px-4 py-3"
          >
            <svg
              className="me-2 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>

            <div className="text-left rtl:text-right">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-bold">Mac App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="w-full sm:w-auto bg-dark  border rounded-full   hover:bg-dark-strong focus:ring-4 focus:outline-none focus:ring-neutral-quaternary text-white rounded-base inline-flex items-center justify-center px-4 py-3"
          >
            <svg
              className="me-2 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              />
            </svg>

            <div className="text-left rtl:text-right">
              <div className="text-xs">Get it on</div>
              <div className="text-sm font-bold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileAppAd;
