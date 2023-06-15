import { Icon } from "@iconify/react";

const Form = () => {
    return (
        <div className="bg-white shadow-[0px_0px_30px_0px_rgba(0,0,0,0.1)] rounded-lg p-10">
            <form>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="name" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block">Name</label>
                        <input
                            id="name"
                            placeholder="Name"
                            className="w-full border border-solid border-primary_2 bg-primary_2 px-3.5 transition-[background-color] duration-300 ease-in-out py-2.5 rounded-md focus:outline-none font-oxygen focus:bg-transparent"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block">Phone</label>
                        <input
                            id="phone"
                            placeholder="Phone"
                            className="w-full border border-solid border-primary_2 bg-primary_2 px-3.5 transition-[background-color] duration-300 ease-in-out py-2.5 rounded-md focus:outline-none font-oxygen focus:bg-transparent"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block">Email</label>
                        <input
                            id="email"
                            placeholder="Email"
                            className="w-full border border-solid border-primary_2 bg-primary_2 px-3.5 transition-[background-color] duration-300 ease-in-out py-2.5 rounded-md focus:outline-none font-oxygen focus:bg-transparent"
                            type="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block">Date</label>
                        <input
                            id="date"
                            placeholder="Date"
                            className="w-full border border-solid border-primary_2 bg-primary_2 px-3.5 transition-[background-color] duration-300 ease-in-out py-2.5 rounded-md focus:outline-none font-oxygen focus:bg-transparent"
                            type="date"
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="message" className="cursor-pointer font-amatic text-lg font-bold opacity-80 mb-1 block">Message</label>
                        <textarea
                            id="message"
                            placeholder="Message"
                            className="w-full border border-solid border-primary_2 bg-primary_2 px-3.5 transition-[background-color] duration-300 ease-in-out py-2.5 rounded-md focus:outline-none font-oxygen focus:bg-transparent"
                            rows={4}
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <button type="submit" className="flex gap-2 bg-main w-full py-2 rounded-md justify-center items-center text-white">
                        <Icon icon="mdi:message-badge" />
                        <span className="font-amatic font-bold text-lg">Submit</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;