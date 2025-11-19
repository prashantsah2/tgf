// app/api/contact/route.js
import nodemailer from "nodemailer";
import { type } from "os";

export async function POST(req) {
  try {
    const {   name,
    email,
      phone,
    companyName,
  

  
    message,
    subscribe,
     InstitutionName,
      yourAssociation,
      title,
      designatedAuthority ,
    terms,type} = await req.json();


    console.log('type isssssssss',type)

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const recipients = process.env.EMAIL_TO.split(",");

    const mailOptions = {
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: recipients,
      subject:`${title}`,
      text: type=='query2'? `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company Name: ${companyName}
      Message: ${message}
      Subscribe: ${subscribe}
      Terms Accepted: ${terms}

      `:`
      
       Name: ${name}
      Email: ${email}
      Phone: ${phone}
      
      Message: ${message}
      Subscribe: ${subscribe}
      Terms Accepted: ${terms}
      Institution Name: ${InstitutionName}
      Your Association: ${yourAssociation}
     
      
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent!" }, { status: 200 });
  } catch (err) {
    console.error("Mail error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
