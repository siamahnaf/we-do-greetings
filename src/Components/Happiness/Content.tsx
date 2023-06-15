import { Link } from "react-scroll/modules";


const Content = () => {
    return (
        <div className="text-white text-center">
            <h5 className="text-5xl font-fredoka mb-6">Happiest birthday <br /> memories to you this <br /> year and every year.</h5>
            <p className="text-base font-oxygen mb-10">All bookings are subject to availability. We recommend ordering well in advance to secure your both your date and your preferred garden greeting. Payment or deposit is required at the time of booking depending on how far in advance you are ordering.</p>
            <Link
                to="testimonial"
                smooth={true}
                offset={-65}
                duration={400}
                spy={true}
                className="bg-main py-2.5 px-8 rounded-md text-white text-lg font-amatic cursor-pointer"
            >
                Discover More
            </Link>
        </div>
    );
};

export default Content;