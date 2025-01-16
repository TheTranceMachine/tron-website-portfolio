import Form from "next/form";
import { Playwrite_CU } from "next/font/google";
import Button from "@/app/_components/button/button";
import Transition from "@/app/Transition";

const playwrite = Playwrite_CU({
  weight: "400",
  style: "normal",
});

export default function ContactPage() {
  return (
    <div className="wrapper sm:px-[41px] px-[20px] gap-1 -mt-6">
      <Transition initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5 }}>
        <div className="content bg-tron-300 w-full text-black p-5 shadow-md border border-tron-400 rounded-md">
          <div className="contact-page justify-self-center mt-4 sm:w-1/2">
            <div className={`text-2xl font-bold mb-6 ${playwrite.className} text-gray-600 antialiased`}>
              Contact me!
            </div>
            <Form action="/send-email">
              <div className="flex flex-col gap-6">
                <div className="contact-page__input">
                  <label htmlFor="name" className="mb-2 block text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    className="rounded-md w-full p-2 border-2 border-tron-sky-900 outline-tron-sky-900"
                    type="text"
                    name="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="contact-page__input">
                  <label htmlFor="email" className="mb-2 block text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    className="rounded-md w-full p-2 border-2 border-tron-sky-900 outline-tron-sky-900"
                    type="email"
                    name="email"
                    placeholder="Your email"
                  />
                </div>
                <div className="contact-page__text-area">
                  <label htmlFor="message" className="mb-2 block text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="rounded-md w-full p-3 border-2 border-tron-sky-900 outline-tron-sky-900"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-1/3 text-white">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Transition>
    </div>
  );
}
