import nodemailer from "nodemailer";


export default async function handler(req,res){
  if(req.method !== "POST"){
    return res.status(405).json({success: false})
  }


  try{


console.log("api");
    const {name, email, phone, message, type} = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure:true,
      auth:{
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = type === 'donation' ? "New Donation Inquiry" : "New Contact Message";

    const adminHTML = `
<div style="font-family:Arial, sans-serif; background:#f6f7fb; padding:20px;">
  
  <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 18px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:#111827; color:#fff; padding:18px 20px;">
      <h2 style="margin:0; font-size:18px;">New Contact Message</h2>
      <p style="margin:5px 0 0; font-size:12px; opacity:0.7;">PUC Washington DC</p>
    </div>

    <!-- Content -->
    <div style="padding:20px;">

      <h3 style="margin-top:0; color:#111827;">${subject}</h3>

      <div style="background:#f9fafb; padding:12px; border-radius:8px; margin-bottom:10px;">
        <p style="margin:6px 0;"><b>Name:</b> ${name}</p>
        <p style="margin:6px 0;"><b>Email:</b> ${email}</p>
        <p style="margin:6px 0;"><b>Phone:</b> ${phone}</p>
      </div>

      <div style="background:#eef2ff; padding:12px; border-radius:8px;">
        <p style="margin:0; color:#111827;"><b>Message:</b></p>
        <p style="margin-top:8px; color:#374151; line-height:1.5;">
          ${message}
        </p>
      </div>

    </div>

  </div>
</div>
`;

    const userHTML =
      type === "donation"
        ? `
<div style="font-family:Arial, sans-serif; background:#f6f7fb; padding:20px;">
  
  <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; padding:25px; text-align:center; box-shadow:0 4px 18px rgba(0,0,0,0.08);">

    <h2 style="color:#16a34a; margin-bottom:10px;">Thank You ❤️</h2>

    <p style="color:#374151; font-size:14px; line-height:1.6;">
      Hello ${name},<br/><br/>
      Thank you for your interest in supporting the ministry.<br/>
      We truly appreciate your generosity and will reach out to you shortly.
    </p>

    <div style="margin-top:20px; font-size:12px; color:#6b7280;">
      PCG Washington DC - North
    </div>

  </div>
</div>
`
        : `
<div style="font-family:Arial, sans-serif; background:#f6f7fb; padding:20px;">
  
  <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; padding:25px; text-align:center; box-shadow:0 4px 18px rgba(0,0,0,0.08);">

    <h2 style="color:#2563eb; margin-bottom:10px;">Message Received</h2>

    <p style="color:#374151; font-size:14px; line-height:1.6;">
      Hello ${name},<br/><br/>
      Thank you for contacting us. We have received your message and will respond shortly.
    </p>

    <div style="margin-top:20px; font-size:12px; color:#6b7280;">
      PCG Washington DC - North
    </div>

  </div>
</div>
`;



    // Send Confirmation to User
    await transporter.sendMail({
      from: `"PCG Washington DC North" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message",
      html: userHTML,
    });

    // Send Notification to Admin
    await transporter.sendMail({
      from: `"Websites" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: subject,
      html: adminHTML,
    });

    return res.status(200).json({ success: true, message: "Email sent Successfully" })

  } catch (err) {
    console.error("Email Error:", err);
    return res.status(500).json({
      success: false,
      message: "Email Failed",
      error: err.message
    })
  } 


}