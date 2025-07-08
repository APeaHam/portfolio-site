import { GanttChartSquare, Blocks, Brush, Gamepad2, Container, Dock } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Description } from "@radix-ui/react-dialog"


const interestsData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: ' I’ve learned various design principles and elements, highlighting the importance of design to user’s experience.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'I have a passion for learning new frameworks and different techniques in software architecture.'
    },
    {
        icon: <Dock size={72} strokeWidth={0.8} />,
        title: 'Desktop App Development',
        description: 'My first coding experiences involved developing desktop applications, introducing me to the ever expanding world of programming.'
    },
    {
        icon: <Gamepad2 size={72} strokeWidth={0.8} />,
        title: 'Game Development',
        description: 'I have recently picked up Godot. Learning the limitations and usages of the game engine through developing small games.'
    },
    {
        icon: <Brush size={72} strokeWidth={0.8} />,
        title: 'Arts and crafts',
        description: 'I like to use phyiscal and digital mediums to express creativity. I sell crochet plushies and I’m currently learning pixel art. '
    },
    {
        icon: <Container size={72} strokeWidth={0.8} />,
        title: 'DevOps',
        description: 'The automation of software develeopment and delivery has a vast amount of options. The way different tools and services interact with one another facinates me.'
    },
]

export const Interests = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
                    My Interests
                </h2>
                {/* grid items */}
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {
                        interestsData.map((item, index) => {
                            return (
                                <Card
                                    className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                                    key={index}
                                >
                                    <CardHeader className='text-primary absolute -top-[60px]'>
                                        <div className='w=[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                                            {item.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent className='text-center'>
                                        <CardTitle className='mb-4'>{item.title}</CardTitle>
                                        <CardDescription className='text-lg'>{item.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Interests