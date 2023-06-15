import Link from "next/link";
import { Icon } from "@iconify/react";


const Touch = () => {
    return (
        <div className="text-white opacity-75">
            <h4 className="text-2xl font-fredoka mb-5">Get in touch</h4>
            <p className="text-base font-oxygen mb-2">Jln Cempaka Wangi No 22, Jakarta <br />
                Indonesia</p>
            <ul>
                <li className="my-2">
                    <Link href="/" className="flex gap-2 items-center">
                        <Icon className="text-lg" icon="majesticons:mail" />
                        <span>hello@yourdomain.com</span>
                    </Link>
                </li>
                <li className="my-2">
                    <Link href="/" className="flex gap-2 items-center">
                        <Icon className="text-lg" icon="entypo:old-phone" />
                        <span>+812 32478223</span>
                    </Link>
                </li>
            </ul>
        </div >
    );
};

export default Touch;