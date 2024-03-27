import { FacebookFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
// import githubIcon from "/public/images/github.png"

const contacts = [
  {
    title: "gmail",
    icons: <MailFilled className="text-red-400 text-[20px]" />,
    value: "vokhanh1982000@gmail.com",
  },
  {
    title: "phone",
    icons: <PhoneFilled className="text-green-400 text-[20px]" />,
    value: "0359812581",
  },
  {
    title: "facebook",
    icons: <FacebookFilled className="text-blue-600 text-[20px]" />,
    value: "https://www.facebook.com/minhkhanh2000",
  },
  {
    title: "github",
    icons: 
    // <Image src={githubIcon} alt="" width={20} height={20}/>
    ""
    ,
    value: "https://github.com/vokhanh1982000",
  }
];

const Contact = () => {
  return (
    <div id="contact" className="text-white">
      <h2 className="text-center text-4xl font-bold text-white mt-10 mb-10">
        Contact Me
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap gap-5">
        {contacts.map((contact, index) => (
          <div key={index} className="flex gap-3 items-center">
            {contact.icons}
            <p className="text-[14px] lg:text-[16px]">{contact.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
