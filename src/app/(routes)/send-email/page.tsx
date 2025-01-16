import Link from "next/link";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

type Params = {
  name: string;
  email: string;
  message: string | string[];
} & Promise<Mail.Options>;

export default async function SendEmailPage({
  searchParams,
}: {
  searchParams: Params
}) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
      pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
    to: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Portfolio website message from ${searchParams.name} (${searchParams.email})`,
    text: Array.isArray(searchParams.message) ? searchParams.message.join(", ") : searchParams.message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();

    return (
      <div className="wrapper flex sm:px-[41px] px-[20px] gap-1 -mt-6">
        <div className="content bg-tron-300 w-full text-black p-5 shadow-md border border-tron-400 rounded-md">
          <div className="contact-page justify-self-center mt-4 sm:w-1/2">
            <div className="text-2xl font-bold mb-6 text-gray-600 antialiased">Email sent!</div>
            <div className="text-gray-600 antialiased">
              Your email has been sent. I will get back to you as soon as possible.
            </div>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    return (
      <div className="wrapper flex sm:px-[41px] px-[20px] gap-1 -mt-6">
        <div className="content bg-tron-300 w-full text-black p-5 shadow-md border border-tron-400 rounded-md">
          <div className="contact-page justify-self-center mt-4 sm:w-1/2">
            <div className="text-2xl font-bold mb-6 text-gray-600 antialiased">Email error!</div>
            <div className="text-gray-600 antialiased">
              I&apos;m sorry, something went wrong.
              <Link href="/contact" className="text-orange-500">
                Try again
              </Link>{" "}
              or contact me directly at <a href="mailto:grzegorz.smolin2@gmail.com">grzegorz.smolin2@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
