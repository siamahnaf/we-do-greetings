import { Icon } from "@iconify/react";

//Data
const data = [
    "Vehicula venenatis in", "Vehicula venenatis in", "Ante dis aliquam",
    "Ante dis aliquam", "Maecenas turpis enim", "Maecenas turpis enim", "At facilisis proin", "At facilisis proin"
]

const Content = () => {
    return (
        <div>
            <h5 className="text-2xl font-amatic font-bold text-main mb-6">Book A Date</h5>
            <h3 className="text-5xl font-fredoka mb-6">It’s your day, make it worth remembering.</h3>
            <p className="text-base font-oxygen opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <ul className="grid grid-cols-2 gap-2 mt-8">
                {data.map((item, i) => (
                    <li key={i} className="flex gap-2 items-center font-oxygen">
                        <Icon className="text-2xl text-hover" icon="tabler:circle-check-filled" />
                        <span className="text-base opacity-60">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Content;