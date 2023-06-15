import { Icon } from "@iconify/react";
import Link from "next/link";

//Data
import { data } from "./Data";

const Card = () => {
    return (
        <div className="mt-20 grid grid-cols-3 gap-5">
            {data.map((item, i) => (
                <div key={i} className="rounded-xl bg-primary_2 text-center p-12">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center">
                        <Icon className="text-3xl text-main" icon={item.icon} />
                    </div>
                    <h5 className="text-lg font-fredoka text-main mt-5 mb-3">{item.title}</h5>
                    <p className="text-base font-oxygen opacity-60 mb-6">{item.description}</p>
                    <Link href="/" className="bg-main py-2.5 px-8 rounded-md text-white font-amatic text-lg">
                        Learn More
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Card;