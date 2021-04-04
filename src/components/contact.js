import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import {
  RiSendPlaneLine,
  RiMailSendLine,
  RiDribbbleFill,
  RiGithubLine,
  RiPhoneFill,
  RiCheckFill,
  RiLinkedinLine,
  RiEmotionUnhappyLine,
} from "react-icons/ri";
import NavDesktop from "./nav/navDesktop";

const getInTouch = "Get in touch if you need help with a project !";
const info = "info";
const partMail = ["premier213", "@outlook", ".com"];
const email = partMail.join("");
const partPhone = ["+98913", "3617506"];
const phone = partPhone.join("");
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Contact = () => {
  const [SendColor, setSendColor] = useState(["bg-blue", "Send"]);
  const { register, handleSubmit, errors } = useForm();
  function onSubmit(data) {
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        data,
        process.env.REACT_APP_EMAIL_USERID
      )
      .then(
        () => {
          setSendColor(["bg-green", "Sent"]);
        },
        () => {
          setSendColor(["bg-red", "Retry"]);
        }
      );
  }
  const checkIcon = () => {
    switch (SendColor[1]) {
      case "Sent":
        return <RiCheckFill className="mt-1 ml-2 text-2xl" />;
      case "Retry":
        return <RiEmotionUnhappyLine className="mt-1 ml-2 text-2xl" />;
      default:
        return <RiSendPlaneLine className="mt-1 ml-2 text-2xl" />;
    }
  };
  return (
    <div className="sm:bg-white xl:items-center xl:justify-center xl:bg-gray-300 flex min-h-screen">
      <div className="sm:flex-row xl:flex-row-reverse xl:w-75v xl:h-75v flex flex-col">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className=" xl:bg-yellow xl:w-full xl:flex xl:flex-col xl:pt-20h xl:pl-16 rounded-r-4xl hidden"
        >
          <motion.div
            variants={items}
            className="font-display 2xl:text-3xl text-2xl text-white"
          >
            {info}
          </motion.div>
          <motion.div
            variants={items}
            className="text-md 2xl:text-xl 2xl:my-2 flex mt-8 font-serif text-white"
          >
            <RiMailSendLine className="my-2 mt-1 mr-3 text-xl" />
            {email}
          </motion.div>
          <motion.div
            variants={items}
            className="text-md 2xl:text-xl 2xl:my-2 flex my-2 font-serif text-white"
          >
            <RiPhoneFill className="mt-1 mr-3 text-xl" />
            {phone}
          </motion.div>
          <motion.div
            variants={items}
            className="2xl:text-2xl flex my-4 font-serif text-xl text-white"
          >
            <motion.button
              className="mr-2"
              type="button"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.5 }}
            >
              <motion.a
                variants={items}
                href="https://dribbble.com/premier213"
                title="Dribbble"
              >
                <RiDribbbleFill />
              </motion.a>
            </motion.button>
            <motion.button
              className="mr-2"
              type="button"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.5 }}
            >
              <motion.a
                variants={items}
                href="https://github.com/premier213"
                title="Github"
              >
                <RiGithubLine />
              </motion.a>
            </motion.button>
            <motion.button
              className="mr-2"
              type="button"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.5 }}
            >
              <motion.a
                variants={items}
                href="https://www.linkedin.com/in/premier213"
                title="LinkedIn"
              >
                <RiLinkedinLine />
              </motion.a>
            </motion.button>
          </motion.div>
        </motion.div>
        <div className="bg-yellow xl:bg-white w-90v xl:w-40v h-80h xl:h-auto xl:rounded-l-4xl rounded-br-7xl xl:rounded-br-none">
          <div className="2xl:my-10h xl:my-10h xl:mx-20 h-60v sm:my-20h sm:w-70v sm:h-80v xl:w-40v md:mt-0 mx-12">
            <NavDesktop />
            <motion.div variants={container} initial="hidden" animate="visible">
              <motion.div
                variants={items}
                className="2xl:mt-16 2xl:text-2xl xl:mt-8 xl:w-20v font-display sm:text-4xl xl:text-lg xl:text-gray-800 mt-2 text-lg text-white"
              >
                {getInTouch}
              </motion.div>
              <div className="2xl:mt-8 mt-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <motion.input
                      variants={items}
                      className="bg-yellow xl:bg-white focus:outline-none focus:border-dark focus:placeholder-dark xl:placeholder-gray-800 xl:focus:placeholder-red xl:border-dark xl:focus:border-red sm:h-12 sm:font-2xl xl:text-sm 2xl:text-xl xl:my-1 2xl:border-b-3 xl:text-gray-800 h-8 my-1 font-serif text-lg text-white placeholder-white border-b-2 border-white"
                      type="text"
                      placeholder="Full Name"
                      name="fullName"
                      ref={register({ required: true, min: 3 })}
                    />
                    <div className="text-red xl:text-xs text-sm">
                      {errors.fullName && "your name is required"}
                    </div>
                    <motion.input
                      variants={items}
                      className="bg-yellow xl:bg-white focus:outline-none focus:border-dark focus:placeholder-dark xl:placeholder-gray-800 xl:border-dark xl:focus:placeholder-red xl:focus:border-red sm:h-12 sm:font-2xl xl:text-sm 2xl:text-xl xl:my-1 xl:text-gray-800 h-8 my-2 font-serif text-lg text-white placeholder-white border-b-2 border-white"
                      type="email"
                      placeholder="Email"
                      name="email"
                      ref={register({
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      })}
                    />
                    <div className="text-red xl:text-xs text-sm">
                      {errors.email && "your Email is required"}
                    </div>
                    <motion.input
                      variants={items}
                      className="bg-yellow xl:bg-white focus:outline-none focus:border-dark focus:placeholder-dark xl:text-gray-800 xl:placeholder-gray-800 xl:border-dark xl:focus:placeholder-red xl:focus:border-red sm:h-12 sm:font-2xl xl:text-sm 2xl:text-xl xl:my-1 h-8 my-2 font-serif text-lg text-white placeholder-white border-b-2 border-white"
                      name="message"
                      placeholder="Message"
                      ref={register({
                        required: true,
                        min: 3,
                      })}
                    />
                    <motion.div
                      variants={items}
                      className="text-red xl:text-xs text-sm"
                    >
                      {errors.message && "message input is required"}
                    </motion.div>
                  </div>
                  <div>
                    <motion.button
                      variants={items}
                      className={`${SendColor[0]} focus:outline-none flex px-4 py-2 mt-4 font-serif text-lg text-white rounded-lg`}
                      type="submit"
                    >
                      {SendColor[1]}
                      {checkIcon()}
                    </motion.button>
                  </div>
                  <motion.div
                    variants={items}
                    className="sm:text-4xl xl:hidden flex mt-8 text-2xl text-white"
                  >
                    <motion.button
                      className="mx-2"
                      type="button"
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1.5 }}
                    >
                      <motion.a
                        variants={items}
                        href="mailto:premier213@outlook.com"
                        title="Email:premier213@outlook.com"
                      >
                        <RiMailSendLine />
                      </motion.a>
                    </motion.button>
                    <motion.button
                      className="mx-2"
                      type="button"
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1.5 }}
                    >
                      <motion.a
                        variants={items}
                        href="https://dribbble.com/premier213"
                        title="Dribbble"
                      >
                        <RiDribbbleFill />
                      </motion.a>
                    </motion.button>
                    <motion.button
                      className="mx-2"
                      type="button"
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1.5 }}
                    >
                      <motion.a
                        variants={items}
                        href="https://github.com/premier213"
                        title="Github"
                      >
                        <RiGithubLine />
                      </motion.a>
                    </motion.button>
                    <motion.button
                      className="mx-2"
                      type="button"
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1.5 }}
                    >
                      <motion.a
                        variants={items}
                        href="https://www.linkedin.com/in/premier213"
                        title="LinkedIn"
                      >
                        <RiLinkedinLine />
                      </motion.a>
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
