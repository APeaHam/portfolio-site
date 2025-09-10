'use client'

import CountUp from 'react-countup'

const Badge = ({ containerStyles, icon, endCountNum, endCountText, endCountDeci, badgeText }) => {
    // function for needing decimal point
    function countDeci(endCountDeci) {
        if (endCountDeci) {
            return <CountUp end={endCountDeci} delay={1} duration={4} />;
        }
    }
    return (
        <div className={`badge ${containerStyles}`}>
            <div className='text-3xl text-primary'>{icon}</div>
            <div className='flex items-center gap-x-2'>
                <div className='text-4xl leading-none font-bold text-primary'>
                    <CountUp end={endCountNum} delay={1} duration={4} />
                    {endCountText}
                    {countDeci(endCountDeci)}
                </div>
                <div className='max-w-[100px] leading-none text-[15px] font-medium text-black'>{badgeText}</div>
            </div>
        </div>


    )
}

export default Badge