import Link from "next/link";
import { Icon } from "@iconify/react";

const Content = () => {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gradient-to-b from-secondary from-0% to-transparent to-30% z-30 text-white">
            <div className="text-center">
                <h5 className="text-7xl font-fredoka">
                    Bring your child’s <br /> dream event to life
                </h5>
                <p className="text-lg font-fredoka my-4">
                    Efficitur conubia pellentesque condimentum proin adipiscing imperdiet <br /> curabitur elementum ad quis feugiat est risus
                </p>
                <Link href="/" className="bg-main flex gap-2 items-center py-2.5 px-8 rounded-md w-max font-amatic text-lg font-medium mx-auto">
                    <span>Discover More</span>
                    <Icon icon="fa6-solid:arrow-right" />
                </Link>
            </div>
        </div>
    );
};

export default Content;