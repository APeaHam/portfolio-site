'use client'
import Link from "next/link"
import { Button } from "./ui/button"

import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/pagination'

import Pagination from 'swiper/modules'

import { ProjectCard } from "@/components/ProjectCard"

const projectData = [
    {
        image: '/work/3.png',
        category: 'cat',
        category: 'Project1',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'cat',
        category: 'Project2',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'cat',
        category: 'Project3',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        link: '/',
        github: '/',
    },
]


export const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/* text */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] 
                flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link href='/projects'>
                        <Button> All projects</Button>
                    </Link>
                </div>
                {/* slider */}
                <div>
                    <Swiper>
                        {/* show only the first 4 projects for the slides */}
                        {
                            projectData.slice(0.4).map((project, index) => {
                                return (
                                    <SwiperSlide>
                                        <ProjectCard project={project} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work