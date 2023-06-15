import Image from "next/image";


const Images = () => {
    return (
        <div>
            <Image src="/images/about/main.jpg" alt="Mask Image" width={1080} height={720} className="mask" />
        </div>
    );
};

export default Images;