"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (email: string, name: string, message: string) => {
    await resend.emails.send({
        from: name + ' <' + email + '>',
        to: 'apham1303@gmail.com',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'

    })
};
