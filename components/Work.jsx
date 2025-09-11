'use client'
import Link from "next/link"
import { Button } from "./ui/button"

import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import { ProjectCard } from "@/components/ProjectCard"

const projectData = [
    {
        image: '/work/2.png',
        category: 'NEXT.JS',
        name: 'A Tool for Property Investment',
        description: "A web app that recommends a ranked list of suburbs with visualisation in which property investors should consider based on the information provided.",
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'Kotlin',
        name: 'Android product management app',
        description: 'A store management system for retail stores. The application contains CRUD functionality for products and can be accessed by multiple users.',
        link: '/',
        github: 'https://github.com/APeaHam/product_management_app',
    },
    {
        image: '/work/3.png',
        category: '.NET',
        name: 'ALDE',
        description: 'A store management system for retail stores. The application contains CRUD functionality for Products, Customer and Staff accounts.',
        link: 'ALDE (C# MVVM)',
        github: 'https://github.com/APeaHam/ALDE',
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
                        A list of some of my latest projects.<br />If you wish to see more go to my github.<br /> (images are placeholders.)
                    </p>
                    <Link href='/projects'>
                        <Button> All projects</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper className="h-[510px] "
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true, type: "bullets" }}
                    >
                        {/* show only the first 4 projects for the slides */}
                        {
                            projectData.slice(0, 4).map((project, index) => {
                                return (
                                    <SwiperSlide key={index}>
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