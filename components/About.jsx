import DevImg from './DevImg'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RiGithubFill, RiSlackLine } from "react-icons/ri"

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, } from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Andy Pham',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+61 432 108 304',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelor of Software Engineering',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Melbourne, Victoria, Australia',
    },
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Swinburne University of Technology',
                qualification: 'Bachelor of Software Engineering',
                years: '2021-2024',
                GPA: '3.38GPA',
            },
        ],
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Pixalink',
                role: 'Full Stack Web Development Intern',
                period: 'November 2023 – February 2024',
            },
            {
                company: 'Coles',
                role: 'Retail Assistant',
                period: 'March 2022 – Present',
            },
            {
                company: 'In2Science',
                role: 'Mentor',
                period: 'August 2022 – October 2022',
            },
        ],
    },
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                type: 'Programming Languages',
                list: 'Python, PHP, C#, C++, HTML/CSS, Java, VHDL, Kotlin, JavaScript, TypeScript, MATLAB'
            },
            {
                type: 'FrameWorks',
                list: '.NET, Laravel, Next.js, React, Spring'
            },
            {
                type: 'Database',
                list: 'SQL, MySQL, NoSQL'
            },
            {
                type: 'Cloud Platforms',
                list: 'AWS, Azure, Firebase'
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: 'about/vscode.svg',
            },
            {
                imgPath: 'about/figma.svg',
            },
            {
                imgPath: 'about/docker-svgrepo-com.svg',
            },
        ],
    },
    {
        title: 'toolsRI',
        data: [
            {
                path: '/',
                name: <RiGithubFill />
            },
            {
                path: '/',
                name: <RiSlackLine />
            },
        ],
    },
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }

    return (
        <section className='xl:h-[860px] pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                    About me
                </h2>
                <div className='flex flex-col xl:flex-row'>
                    {/* image */}
                    <div className='hidden xl:flex flex-1 relative'>
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                            imgSrc='/about/developer.png' />
                    </div>
                    {/* tabs */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal */}
                                <TabsContent value="personal">
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>Expertise title</h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                            description of my expertice
                                        </p>
                                        {/* icons */}
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                        <div className='text-primary'>{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {/* languages */}
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'>Language Skill</div>
                                            <div className='border-b border-border dark:border-primary'></div>
                                            <div>English, Vietnamese</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualifications">
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>
                                            My Journey
                                        </h3>
                                        {/* exp & edu */}
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            {/* exp */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'experience').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'experience').data.map((item, index) => {
                                                        const { company, role, period } = item
                                                        return (
                                                            <div className='flex gap-x-8 group' key={index}>
                                                                <div className='h-[84px] w-[1px] bg-border dark:bg-primary relative ml-2'>
                                                                    <div className='h-[11px] w-[11px] rounded-full bg-primary absolute
                                                                    -left-[5px] group-hover:translate-y-[84px] translate-all duration-500
                                                                    '></div>
                                                                </div>
                                                                <div>
                                                                    <div className='font-semibold text-xl leading-none mb-2'>
                                                                        {company}
                                                                    </div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                                        {role}
                                                                    </div>
                                                                    <div className='text-base font-medium'>
                                                                        {period}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            {/* edu */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'education').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'education').data.map((item, index) => {
                                                        const { university, qualification, years, GPA } = item
                                                        return (
                                                            <div className='flex gap-x-8 group' key={index}>
                                                                <div className='h-[100px] w-[1px] bg-border dark:bg-primary relative ml-2'>
                                                                    <div className='h-[11px] w-[11px] rounded-full bg-primary absolute
                                                                    -left-[5px] group-hover:translate-y-[100px] translate-all duration-500
                                                                    '></div>
                                                                </div>
                                                                <div>
                                                                    <div className='font-semibold text-xl leading-none mb-2'>
                                                                        {university}
                                                                    </div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                                        {qualification}
                                                                    </div>
                                                                    <div className='text-base font-medium'>
                                                                        {years}, {GPA}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* skills */}
                                <TabsContent value="skills">
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4 text-center xl:text-left'>
                                            My Capabilities
                                        </h3>
                                        <div className='text-center xl:text-left'>
                                            {getData(skillData, 'skills').data.map(
                                                (item, index) => {
                                                    const { type, list } = item;
                                                    return (
                                                        <div className='mb-3' key={index}>
                                                            <h4 className='text-xl front-semibold mb-1'>{type}</h4>
                                                            <div className='border-b border-border dark:border-primary mb-2'></div>
                                                            <div>
                                                                <div className='text-center xl:text-left mx-auto xl:mx-0'>
                                                                    <div className='font-medium'>{list}</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    )
                                                }
                                            )}
                                            <div className='mb-3'>
                                                <h4 className='text-xl front-semibold mb-1'>Tools</h4>
                                                <div className='border-b border-border dark:border-primary mb-2'></div>
                                                <div className='flex gap-x-8 justify-center xl:justify-start'>
                                                    {getData(skillData, 'tools').data.map(
                                                        (item, index) => {
                                                            const { imgPath } = item;
                                                            return (
                                                                <div key={index}>
                                                                    <Image
                                                                        src={imgPath}
                                                                        width={48}
                                                                        height={48}
                                                                        alt=''
                                                                        priority
                                                                    />
                                                                </div>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div >
        </section >
    );

}

export default About