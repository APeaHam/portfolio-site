import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import contactEmail from '@/emails/contactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, msg, email } = await request.json();

    await resend.emails.send({
        from: 'andy-pham@apeaham.dev',
        to: email,
        cc: 'apham1303@gmail.com',
        subject: 'Your email to Andy Pham',
        react: contactEmail({
            name,
            msg,
        }),
    });
    return NextResponse.json({
        status: 'Ok'
    })
};