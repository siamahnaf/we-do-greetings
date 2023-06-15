import { Link as ScrollLink } from "react-scroll/modules";
import Link from "next/link";

//Data
const data = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Service", id: "service" },
    { name: "Client", id: "testimonial" },
    { name: "Contact Us", id: "contact" }
]

const Nav = () => {
    return (
        <div className="flex-1 text-right">
            <ul className="flex gap-7 justify-end">
                {data.map((item, i) => (
                    <li key={i}>
                        <ScrollLink
                            to={item.id}
                            className="naves font-fredoka text-base cursor-pointer"
                            activeClass="selected"
                            smooth={true}
                            offset={-65}
                            duration={400}
                            spy={true}
                        >
                            {item.name}
                        </ScrollLink>
                    </li>
                ))}
                <li>
                    <Link href="https://hirewedogreetings.shop.mysharefox.com/" target="_blank" className="bg-main text-lg text-white py-2 px-5 rounded font-amatic">
                        Get Started
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;