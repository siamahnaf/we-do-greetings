import Link from "next/link";


const Content = () => {
    return (
        <div className="text-white text-center">
            <h5 className="text-5xl font-fredoka mb-6">Happiest birthday <br /> memories to you this <br /> year and every year.</h5>
            <p className="text-base font-oxygen mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <Link href="/" className="bg-main py-2.5 px-8 rounded-md text-white text-lg font-amatic">
                Discover More
            </Link>
        </div>
    );
};

export default Content;