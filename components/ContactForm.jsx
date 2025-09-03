'use client';

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const ContactForm = () => {
    async function handleOnSubmit() {

        const results = await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify({
                name: customerName.value,
                msg: msg.value,
                email: email.value,
            })
        }).then(r => r.json());
    }

    return (
        <form action={handleOnSubmit} className="flex flex-col gap-y-4">
            {/* name */}
            <div className="relative flex items-center">
                <Input type='name' id='customerName' name='customerName' placeholder='Name' />
                <User className="absolute right-6" size={20} />
            </div>
            {/* Email */}
            <div className="relative flex items-center">
                <Input type='email' id='email' name='email' placeholder='Email' />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            {/* text */}
            <div className="relative flex items-center">
                <Textarea id='msg' name='msg' placeholder='Type Your Message Here.' />
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button className='flex items-center gap-x-1 max-w-[166px]' type='submit'>
                Let's Talk
                <ArrowRightIcon size={20} />
            </Button>
        </form>
    )
}

export default ContactForm