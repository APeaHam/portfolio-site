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
        text: 'Bachelor of Engineering (Honours) (Software)',
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
                qualification: 'Bachelor of Engineering (Honours) (Software)',
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
                name: 'Python, PHP, C#, C++, HTML/CSS, Java, VHDL, Kotlin, JavaScript, TypeScript, MATLAB'
            },
            {
                type: 'FrameWorks',
                name: '.NET, Laravel, Next.js, React, Spring'
            },
            {
                type: 'Database',
                name: 'SQL, MySQL, NoSQL'
            },
            {
                type: 'Cloud Platforms',
                name: 'AWS, Azure, Firebase'
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

    return
    <section>
        <div className='container mx-auto'>
            <h2 className='selection-title'>About me</h2>
        </div>
    </section>
}

export default About