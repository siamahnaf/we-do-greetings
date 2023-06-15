import Link from "next/link";

const Content = () => {
    return (
        <div>
            <h5 className="text-2xl font-amatic text-main font-bold mb-5">Wo We Are</h5>
            <h3 className="text-5xl font-fredoka mb-6">There’s nothing more magical than a child’s imagination</h3>
            <p className="text-base font-oxygen opacity-60 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <Link href="/" className="bg-main text-lg font-amatic py-2.5 px-8 rounded-md text-white">
                Discover More
            </Link>
        </div>
    );
};

export default Content;