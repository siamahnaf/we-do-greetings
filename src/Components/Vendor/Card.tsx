import Image from "next/image";

//Data
const data = [
    { image: "/images/vendor/treva.png", alt: "Treva" },
    { image: "/images/vendor/solaytic.png", alt: "Solaytic" },
    { image: "/images/vendor/lighting.png", alt: "Lighting" },
    { image: "/images/vendor/kanba.png", alt: "Kanba" },
    { image: "/images/vendor/aven.png", alt: "Aven" },
    { image: "/images/vendor/ideaa.png", alt: "Ideaa" },
    { image: "/images/vendor/circle.png", alt: "Circle" },
    { image: "/images/vendor/fox-hub.png", alt: "Fox Hub" },
]

const Card = () => {
    return (
        <div className="grid grid-cols-4 gap-5 mt-16">
            {data.map((item, i) => (
                <div className="bg-white p-6 rounded-lg">
                    <Image src={item.image} alt={item.alt} width={2010} height={600} />
                </div>
            ))}
        </div>
    );
};

export default Card;