import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import contactEmail from '@/emails/contactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    resend.emails.send({
        from: 'apham1303@gmail.com',
        to: 'user@gmail.com',
        subject: 'hello world',
        react: contactEmail(),
    });
    return NextResponse.json({
        status: 'Ok'
    })
};