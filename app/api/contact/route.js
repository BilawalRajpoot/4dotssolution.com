// import nodemailer from 'nodemailer';
// import { NextResponse } from 'next/server';

// export const dynamic = 'force-dynamic'; // Ensure dynamic rendering

// export async function POST(req) {
//     try {
//         const body = await req.json(); // Parse JSON body
//         const { name, email, subject, message } = body;

//         // Logging request body to check data
//         console.log('Request body:', body);

//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'bilawal.ali2626@gmail.com',
//                 pass: 'lscv qztk gedd qkeu',
//             },
//         });

//         const mailOptions = {
//             from: email,
//             to: 'bilawal.ali2626@gmail.com', // The email address you want to receive the form data
//             subject: '4DotsSolutions Contact Leads',
//             text: `
//                 Name: ${name}
//                 Email: ${email}
//                 Subject: ${subject}
//                 Message: ${message}
//             `,
//         };

//         await transporter.sendMail(mailOptions);
//         return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
//     }
// }



import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensure dynamic rendering

export async function POST(req) {
    try {
        const body = await req.json(); // Parse JSON body
        const { name, email, phone, budget, message, selectedServices } = body; // Destructure data including checkboxes

        // Logging request body to check data
        console.log('Request body:', body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'bilawal.ali2626@gmail.com', // Replace with your email
                pass: 'lscv qztk gedd qkeu', // Replace with your app-specific password
            },
        });

        const servicesList = selectedServices && selectedServices.length
            ? selectedServices.join(', ')
            : 'No services selected';

        const mailOptions = {
            from: email,
            to: 'bilawal.ali2626@gmail.com', // The email address you want to receive the form data
            subject: 'Contact Form Submission - 4DotsSolutions',
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Budget: ${budget}
                Services: ${servicesList}
                Message: ${message}
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
    }
}
