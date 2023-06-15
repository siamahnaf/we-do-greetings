import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Icon } from "@iconify/react";

//Data
const data = [
    {
        question: "How long does shipping take?",
        answer: "Shipping times vary depending on your location. On average, domestic orders are delivered within 3-5 business days, while international orders may take up to 2 weeks. Please note that these are estimated times and delays may occur due to unforeseen circumstances."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to most countries. During the checkout process, you can select your country from the list of available options. Please note that additional customs fees and import duties may apply, which are the responsibility of the recipient."
    },
    {
        question: "Are discounts available for bulk orders?",
        answer: "Yes, we offer discounts for bulk orders. If you are interested in making a bulk purchase, please contact our sales team with the details of your order, and they will provide you with a customized quote."
    },
    {
        question: "Is customer support available 24/7?",
        answer: "Our customer support team is available to assist you from Monday to Friday, 9 AM to 6 PM (EST). If you have any questions or need assistance, you can reach out to us through email or our live chat feature on the website."
    }
];



const FaqTwo = () => {
    return (
        <div>
            <Accordion transition transitionTimeout={250}>
                {data.map((item, i) => (
                    <AccordionItem
                        key={i}
                        contentProps={{ className: "transition-[height] duration-[250] ease-[cubic-bezier(0,0,0,1)] font-oxygen" }}
                        header={({ state: { isEnter } }) => (
                            <>
                                <p className="flex-1 text-left">{item.question}</p>
                                <div className={`transition-all duration-300 ease-in-out ${isEnter ? "rotate-180" : ""}`}>
                                    <Icon className={`text-2xl transition-all duration-500 ease-in-out ${isEnter ? "text-white" : "text-hover"}`} icon="mdi:arrow-bottom-drop-circle" />
                                </div>
                            </>
                        )}
                        buttonProps={{
                            className: ({ isEnter }) =>
                                `flex w-full p-5 rounded-lg font-fredoka transition-all duration-500 ease-in-out ${isEnter ? "bg-main" : "bg-primary_2"}`
                        }}
                        className="rounded-lg bg-secondary my-4"
                        panelProps={{ className: "p-6" }}
                    >
                        {item.answer}
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FaqTwo;