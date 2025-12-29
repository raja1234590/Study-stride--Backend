import nodemailer from "nodemailer";


export const sendEmail = async (to, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Password Reset OTP",
    html: `
      <h3>Your OTP is: <b>${otp}</b></h3>
      <p>Valid for 10 minutes</p>
    `,
  });
};


export const sendCounsellingAdminEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const {
    firstName,
    lastName,
    degree,
    email,
    phone,
    exam,
    day,
    time,
    comments,
    resume,
  } = data;

  await transporter.sendMail({
    from: `"Counselling Booking" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL, // your email
    subject: "New Counselling Slot Booked",
    html: `
      <h2>New Counselling Request</h2>
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Degree:</b> ${degree}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Exam:</b> ${exam}</p>
      <p><b>Slot:</b> ${day} at ${time}</p>
      <p><b>Comments:</b> ${comments || "N/A"}</p>
      <p><b>Resume:</b> ${resume ? resume : "Not uploaded"}</p>
    `,
  });
};
