import SectionText from "@/components/layout/SectionText";
import { Github, Linkedin, PhoneForwarded } from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="text-center">
        <div className="mt-16 mb-8">
        <SectionText subText={""} mainText={"Hello "}/>
        </div>
   
      <p className="font-semibold " >My name is Pedro I&apos;m a front-end developer</p>
      <br />
      <p className="font-semibold " >Contact me and check out my other projects </p>
      <br />
      <div className="flex gap-8 justify-center items-center mx-auto mt-16">
        <div className="">
          <button className="rounded-s-3xl
           text-blue-600 border-2
            border-blue-600 hover:border-blue-800  hover:text-blue-800">
            <Link href={"https://www.linkedin.com/in/jpmp1998/"} target="blank">
            <Linkedin />
            </Link>
          </button>
        </div>
        <div>
          <button className="text-purple-800 
          border-2 border-purple-700 hover:border-purple-900  hover:text-purple-900 ">
            <Link href={"https://github.com/Pedro-maciel-pinheiro"} target="blank">
            <Github />
            </Link>
          </button>
        </div>
        <div>
          <button className="rounded-e-3xl
           text-green-700 border-2 border-green-700
            hover:border-green-900  hover:text-green-900">
            <Link href={"https://web.whatsapp.com/send?phone=5561998516239"} target="blank">
            <PhoneForwarded />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

