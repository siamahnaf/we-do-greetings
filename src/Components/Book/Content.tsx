import { Icon } from "@iconify/react";

//Data
const data = [
    "Happy Birthday", "Happy Anniversary", "It’s a Boy",
    "It’s a Girl", "Congratulations", "Happy Retirement"
]

const Content = () => {
    return (
        <div>
            <h5 className="text-2xl font-amatic font-bold text-main mb-6">Book A Date</h5>
            <h3 className="text-5xl font-fredoka mb-6">It’s your day, make it worth remembering.</h3>
            <p className="text-base font-oxygen opacity-70">Rentals can be extended for up to two extra days for an additional fee of £25 per day. Last minute extensions may be denied if we have another reservation already scheduled for your theme. The rental cost includes delivery, installation and removal.</p>
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