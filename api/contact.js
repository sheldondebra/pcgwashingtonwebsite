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
    <h3>${subject}</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
    `;

    const userHTML =
      type === "donation"
        ? `<p>Hello ${name},<br/>Thank you for reaching out about donation. We will contact you shortly.</p>`
        : `<p>Hello ${name},<br/>Thank you for contacting us. We will respond shortly.</p>`;

        await transporter.sendMail({
          from: `"Website" <${process.env.SMTP_USER}>`,
          to: process.env.SMTP_USER, 
          subject,
          html: adminHTML,
        });



        await transporter.sendMail({
          from: `"Websites"<${process.env.SMTP_USER}>`,
          to: email,
          subject: "We received your message",
          html: userHTML,
        });

            return res.status(200).json({success:true , message: "Email sent Successfully"})

  }catch(err){
    console.log("Email Error: " + err.message)
    return res.status(500).json({
      success: false,
      message: "Email Failed"
    })
  } 


}