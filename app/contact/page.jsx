import { MailIcon, HomeIcon, PhoneCall } from "lucide-react"
import ContactForm from "@/components/ContactForm"

const Contact = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                    {/* text */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                            <span className="w-[30px] h-[2px] bg-primary"></span>
                            Say Hello
                        </div>
                        <h1 className="h1 max-w-md mb-8">Let's work Together</h1>
                        <p className="subtitle max-w-[400px]">
                            Feel free to leave a message for me below. I'll get back to you in 2-3 days.
                        </p>
                    </div>
                    {/* image */}
                    <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark
                    bg-contain bg-top bg-no-repeat"></div>
                </div>
                {/* info text & form */}
                <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
                    {/* info text */}
                    <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
                        {/* mail */}
                        <div className="flex items-center gap-x-8">
                            <MailIcon size={18} className="text-primary" />
                            <div>apham1303@gmail.com</div>
                        </div>
                        {/* address */}
                        <div className="flex items-center gap-x-8">
                            <HomeIcon size={18} className="text-primary" />
                            <div>Melbourne, Victoria, Australia</div>
                        </div>
                        {/* phone */}
                        <div className="flex items-center gap-x-8">
                            <PhoneCall size={18} className="text-primary" />
                            <div>(+61) 432 108 304</div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact