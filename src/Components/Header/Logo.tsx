import Link from "next/link";
import Rive from "@rive-app/react-canvas";

const Logo = () => {
    return (
        <div className="basis-[12%]">
            <Link href="/" className="block h-[90px] w-[380px]">
                <Rive src="/rive/logo.riv" width="100%" height="100%" />
            </Link>
        </div>
    );
};

export default Logo;