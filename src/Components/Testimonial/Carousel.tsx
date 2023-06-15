import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Icon } from "@iconify/react";
import Image from "next/image";


//Data
import { data } from "./Data";

const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        containScroll: "trimSnaps",
        dragFree: true,
        startIndex: 0,
    }, [Autoplay()])
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi],
    )
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi],
    )
    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi],
    )

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className="mt-10 relative">
            <div className="overflow-hidden">
                <div ref={emblaRef}>
                    <div className="flex">
                        {data.map((item, i) => (
                            <div className="flex-[0_0_33.33%] px-5" key={i}>
                                <div className="bg-primary_2 p-12 rounded-lg text-center">
                                    <p className="text-lg font-fredoka opacity-70">{item.message}</p>
                                </div>
                                <div className="flex gap-4 justify-center mt-4 items-center">
                                    <div>
                                        <Image src={item.profile} alt={item.name} width={300} height={300} className="w-[45px] h-[45px] rounded-full" />
                                    </div>
                                    <div>
                                        <h5 className="text-base font-fredoka opacity-70">{item.name}</h5>
                                        <p className="text-base font-amatic">{item.city}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
    );
};

export default Carousel;



//Interface Button Props
interface ButtonProps {
    onClick: () => void;
    enabled: boolean;
}
const PrevButton = ({ onClick, enabled }: ButtonProps) => {
    return (
        <button
            className="absolute -left-3 top-1/2 -translate-x-1/2"
            onClick={onClick}
            disabled={!enabled}
        >
            <Icon className="text-2xl text-main" icon="fluent:chevron-left-12-filled" />
        </button>
    )
}

const NextButton = ({ onClick, enabled }: ButtonProps) => {
    return (
        <button
            className="absolute -right-[36px] top-1/2 -translate-x-1/2"
            onClick={onClick}
            disabled={!enabled}
        >
            <Icon className="text-2xl text-main" icon="fluent:chevron-right-12-filled" />
        </button>
    )
}