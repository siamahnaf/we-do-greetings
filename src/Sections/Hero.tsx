import { Zoom } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";

//Components
import Container from "@/Components/Common/Container";
import Content from "@/Components/Hero/Content";
import Curves from "@/Components/Hero/Curves";

const images = [
    { url: "/images/slides/slide-1.jpg", alt: "Slide1" },
    { url: "/images/slides/slide-2.jpg", alt: "Slide2" }
];

const Hero = () => {
    return (
        <section id="home">
            <Container className="!px-0 relative">
                <Zoom
                    scale={1.5}
                    indicators={false}
                    arrows={false}
                    pauseOnHover={false}
                    transitionDuration={4000}
                    duration={4000}
                >
                    {images.map((item, index) => (
                        <div key={index} className="relative aspect-[8/5]">
                            <Image src={item.url} alt={item.alt} fill className="object-cover object-center" />
                        </div>
                    ))}
                </Zoom>
                <Content />
                <Curves />
            </Container>
        </section>
    );
};

export default Hero;