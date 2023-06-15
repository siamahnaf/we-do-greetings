import { Link } from "react-scroll/modules";
import { Icon } from "@iconify/react";
import Rive from "@rive-app/react-canvas";

const Content = () => {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gradient-to-b from-secondary from-0% to-transparent to-30% z-30 text-white">
            <div className="text-center">
                <div className="h-[150px] w-[800px] mx-auto">
                    <Rive src="/rive/logo.riv" width="100%" height="100%" />
                </div>
                <h5 className="text-7xl font-fredoka">
                    Cheerful Rental <br /> Greeting Signs
                </h5>
                <p className="text-lg font-fredoka my-4">
                    Make your celebration extra special with bold, <br /> colourful outdoor cards!
                </p>
                <Link
                    to="about"
                    smooth={true}
                    offset={-65}
                    duration={400}
                    spy={true}
                    className="bg-main flex gap-2 items-center py-2.5 px-8 rounded-md w-max font-amatic text-lg font-medium mx-auto cursor-pointer"
                >
                    <span>Discover More</span>
                    <Icon icon="fa6-solid:arrow-right" />
                </Link>
            </div>
        </div>
    );
};

export default Content;