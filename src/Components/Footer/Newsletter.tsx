import { Icon } from "@iconify/react";

const Newsletter = () => {
    return (
        <div className="text-white">
            <h5 className="text-2xl font-fredoka mb-5">Newsletter.</h5>
            <p className="text-base font-oxygen opacity-80">
                Signup for our newsletter to get updated information, insight, or promotions.
            </p>
            <form className="mt-7">
                <div>
                    <input
                        placeholder="Email"
                        className="py-2.5 px-4 bg-white text-base font-oxygen rounded-lg w-full placeholder:text-gray-600"
                    />
                </div>
                <div className="mt-3">
                    <button className="flex gap-2 justify-center items-center bg-main py-2.5 rounded-md w-full">
                        <Icon icon="majesticons:mail-line" />
                        <span>Sign Up</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Newsletter;