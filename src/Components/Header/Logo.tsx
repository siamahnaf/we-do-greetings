import Link from "next/link";
import Rive from "@rive-app/react-canvas";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="basis-[12%]">
            <Link href="/">
                <Image src="/images/logos.png" alt="Logo" width={1276} height={300} />
                {/* <Rive src="https://rive.app/s/9-kN0gYQ9E_GvzDpOWOe_A" width="100%" height="100%" /> */}
            </Link>
        </div>
    );
};

export default Logo;