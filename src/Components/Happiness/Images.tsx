import Image from "next/image";

const Images = () => {
    return (
        <div>
            <Image src="/images/happiness/main.jpg" alt="Happiness" width={1080} height={720} className="mask-2" />
        </div>
    );
};

export default Images;