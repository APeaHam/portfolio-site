import Image from "next/image"

const DevImg = ({ containerStyles, imgSrc }) => {
    return (
        <div className={`${containerStyles}`}>
            DevImg
            <Image src={imgSrc} fill priority alt='' />
        </div>
    )
}

export default DevImg