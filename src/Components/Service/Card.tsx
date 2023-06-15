import Image from "next/image";
import Link from "next/link";

//Data
import { data } from "./Data";

const Card = () => {
    return (
        <div className="mt-20 grid grid-cols-3 gap-5">
            {data.map((item, i) => (
                <div key={i} className="rounded-xl bg-primary overflow-hidden">
                    <Image src={item.image} alt={item.title} width={1024} height={682} className="aspect-[4/3] object-cover object-center" />
                    <div className="text-center px-14 py-8">
                        <h3 className="text-2xl font-fredoka opacity-70 mb-4">{item.title}</h3>
                        <p className="text-base font-oxygen opacity-70 mb-7">{item.description}</p>
                        <Link href="/" className="bg-main py-2.5 px-8 rounded-md font-amatic text-lg font-bold text-white">
                            Book Now!
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;