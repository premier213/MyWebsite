import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  RiSendPlaneLine,
  RiMailSendLine,
  RiDribbbleFill,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";
import NavDesktop from "./nav/navDesktop";

const getInTouch = "Get in touch if you need help with a project !";
const send = "Send";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  function onSubmit(data) {
    console.log(data.fullName);
  }
  return (
    <div className="sm:bg-white xl:items-center xl:justify-center xl:bg-gray-300 flex min-h-screen">
      <div className="sm:flex-row xl:flex-row-reverse xl:w-75v xl:h-75v flex flex-col">
        <div className=" xl:bg-yellow xl:w-50v xl:flex xl:justify-end xl:h-full rounded-r-4xl hidden">
          111
        </div>
        <div className="bg-yellow xl:bg-white w-90v xl:w-40v h-80h xl:h-auto xl:rounded-l-4xl rounded-br-7xl xl:rounded-br-none">
          <div className="2xl:my-10h xl:my-10h xl:mx-20 h-60v sm:my-20h sm:w-70v sm:h-80v xl:w-40v md:mt-0 mx-12">
            <NavDesktop />
            <div className="xl:mt-8 xl:w-20v font-display sm:text-4xl xl:text-lg xl:text-gray-800 mt-2 text-lg text-white">
              {getInTouch}
            </div>
            <div className="mt-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    className="bg-yellow xl:bg-white focus:outline-none focus:border-dark focus:placeholder-dark xl:placeholder-gray-800 xl:focus:placeholder-red xl:border-dark xl:focus:border-red sm:h-12 sm:font-2xl xl:text-sm xl:my-1 h-8 my-1 font-serif text-lg text-white placeholder-white border-b-2 border-white"
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    ref={register({ required: true, min: 3 })}
                  />
                  <div className="text-dark xl:text-xs text-sm">
                    {errors.fullName && "your name is required"}
                  </div>
                  <input
                    className="bg-yellow xl:bg-white focus:outline-none focus:border-dark focus:placeholder-dark xl:placeholder-gray-800 xl:border-dark xl:focus:placeholder-red xl:focus:border-red sm:h-12 sm:font-2xl xl:text-sm xl:my-1 h-8 my-2 font-serif text-lg text-white placeholder-white border-b-2 border-white"
                    type="email"
                    placeholder="Email"
                    name="email"
                    ref={register({
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                  />
                  <div className="text-dark xl:text-xs text-sm">
                    {errors.email && "your Email is required"}
                  </div>
                  <input
                    className="bg-yellow xl:bg-white focus:outline-none focus:border-dark focus:placeholder-dark xl:placeholder-gray-800 xl:border-dark xl:focus:placeholder-red xl:focus:border-red sm:h-12 sm:font-2xl xl:text-sm xl:my-1 h-8 my-2 font-serif text-lg text-white placeholder-white border-b-2 border-white"
                    name="message"
                    placeholder="Message"
                    ref={register({
                      required: true,
                      min: 3,
                    })}
                  />
                  <div className="text-dark xl:text-xs text-sm">
                    {errors.message && "message input is required"}
                  </div>
                </div>
                <div>
                  <motion.button
                    className="bg-blue focus:outline-none flex px-4 py-2 mt-4 font-serif text-lg text-white rounded-lg"
                    type="submit"
                  >
                    {send}
                    <RiSendPlaneLine className="mt-1 ml-2 text-2xl" />
                  </motion.button>
                </div>
                <div className="sm:text-4xl xl:hidden flex mt-8 text-2xl text-white">
                  <motion.button
                    className="mx-2"
                    type="button"
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1.5 }}
                  >
                    <a
                      href="mailto:premier213@outlook.com"
                      title="Email:premier213@outlook.com"
                    >
                      <RiMailSendLine />
                    </a>
                  </motion.button>
                  <motion.button
                    className="mx-2"
                    type="button"
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1.5 }}
                  >
                    <a href="https://dribbble.com/premier213" title="Dribbble">
                      <RiDribbbleFill />
                    </a>
                  </motion.button>
                  <motion.button
                    className="mx-2"
                    type="button"
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1.5 }}
                  >
                    <a href="https://github.com/premier213" title="Github">
                      <RiGithubLine />
                    </a>
                  </motion.button>
                  <motion.button
                    className="mx-2"
                    type="button"
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1.5 }}
                  >
                    <a
                      href="https://www.linkedin.com/in/premier213"
                      title="LinkedIn"
                    >
                      <RiLinkedinLine />
                    </a>
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
