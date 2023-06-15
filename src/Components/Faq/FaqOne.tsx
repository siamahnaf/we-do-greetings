import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Icon } from "@iconify/react";

//Data
const data = [
    {
        question: "What is the return policy?",
        answer: "Our return policy allows you to return any item within 30 days of purchase for a full refund. Please ensure that the item is in its original condition with all tags attached."
    },
    {
        question: "How can I track my order?",
        answer: "To track your order, simply visit our website and go to the 'Order Tracking' page. Enter your order number and email address, and you will receive real-time updates on the status of your shipment."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, including Visa, Mastercard, and American Express. We also offer the option to pay with PayPal for added convenience."
    },
    {
        question: "Can I cancel my order?",
        answer: "Yes, you can cancel your order within 24 hours of placing it. Please contact our customer support team with your order details, and they will assist you in canceling the order and issuing a refund."
    }
];


const FaqOne = () => {
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

export default FaqOne;