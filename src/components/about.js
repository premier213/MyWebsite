import map from "lodash/map";
import { motion } from "framer-motion";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import NavDesktop from "./nav/navDesktop";
import avatar from "../assets/img/avatar.png";
import "swiper/swiper.scss";

SwiperCore.use([Autoplay]);
const name = "Meysam Saberi";
const cv = "Download CV";
const describe =
  "I Am Meysam Saberi Based In Iran, Frontend Developer From Isfahan. I Have Rich Experience In Web Design And Building And Customization, Also I Am Good At React.js.";
const MySkill = "My Skills";
const skills = [
  "React.js",
  "JavaScript",
  "Sass & Less",
  "UI & UX",
  "git & github",
  "Figma",
  "Adobe XD",
  "Bootstrap",
  "Tailwindcss",
  "Material UI",
  "Chakra UI",
];
const arraySkills = (item) => (
  <SwiperSlide
    key={uuidv4()}
    className="rounded-2xl flex justify-around w-auto py-2 mr-4 bg-gray-100"
  >
    {item}
  </SwiperSlide>
);
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
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const About = () => (
  <div className="sm:bg-white xl:items-center xl:justify-center xl:bg-gray-300 flex min-h-screen">
    <div className="rounded-4xl sm:flex-row xl:flex-row-reverse xl:w-75v xl:h-75v xl:bg-white flex flex-col">
      <div className="geo-pattern w-100v 2xl:w-50v h-20v bg-yellow rounded-br-25 sm:w-30v sm:h-80v sm:rounded-br-full xl:w-40v xl:h-75v xl:rounded-r-4xl" />
      <div className=" 2xl:my-10h xl:my-10h xl:mx-20 h-60v sm:my-20h sm:w-70v sm:h-80v my-10h mx-12">
        <NavDesktop />
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="xl:ml-10 xl:flex-col xl:mt-10 lg:-ml-32 sm:justify-start sm:-ml-15v sm:-mt-10h flex justify-center -mt-40"
          >
            <img
              src={avatar}
              alt="profile"
              className="xl:w-24 xl:h-24 lg:w-40 lg:h-40 sm:w-40 sm:h-40 w-32 h-32 rounded-full"
            />
            <motion.button
              variants={item}
              type="button"
              className="bg-red focus:outline-none xl:flex hidden w-40 px-4 py-2 mt-8 -ml-8 text-sm font-thin text-gray-100 rounded-lg"
            >
              {cv}
              <RiDownloadCloud2Line className="flex content-center mx-1 text-xl" />
            </motion.button>
          </motion.div>
          <motion.div
            variants={item}
            className="2xl:ml-56 font-display 2xl:text-5xl xl:-mt-40 xl:ml-48 sm:text-4xl xl:text-4xl sm:flex sm:-mt-10h sm:ml-10v sm:justify-start mt-2 text-3xl text-center text-gray-700"
          >
            {name}
          </motion.div>
          <motion.div
            variants={item}
            className="xl:hidden 2xl:text-3xl xl:mt-4 xl:max-w-sm xl:text-2x sm:mt-5h sm:ml-10v sm:w-40v l sm:text-3xl sm:justify-start flex justify-center mt-2 text-xl text-gray-700"
          >
            <motion.button
              variants={item}
              type="button"
              className="bg-red focus:outline-none flex px-4 py-2 text-lg font-thin text-gray-100 rounded-lg"
            >
              {cv}
              <RiDownloadCloud2Line className="flex content-center mx-2 text-2xl" />
            </motion.button>
          </motion.div>
          <motion.div
            variants={item}
            className="2xl:ml-56 2xl:mt-8 xl:mt-4 xl:ml-48 sm:max-w-sm sm:ml-10v sm:justify-start sm:mt-10h sm:text-xl sm:flex justify-center mt-4 text-base text-gray-800"
          >
            {describe}
          </motion.div>
          <motion.div
            variants={item}
            className="2xl:ml-56 2xl:mt-16 2xl:text-3xl xl:mt-4 xl:text-2xl xl:ml-48 sm:flex sm:justify-start sm:ml-10v sm:mt-10h font-display sm:text-3xl mt-2 text-xl text-center text-gray-700"
          >
            {MySkill}
          </motion.div>
          <motion.div
            variants={item}
            className="2xl:ml-56 xl:ml-48 w-70v sm:max-w-sm sm:ml-10v sm:flex-none sm:flex-wrap sm:flex-start mt-4 text-gray-800"
          >
            <Swiper
              slidesPerView={2.4}
              autoplay={{ delay: 2000 }}
              loop="true"
              breakpoints={{ 640: { slidesPerView: 4 } }}
            >
              {map(skills, arraySkills)}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
);
export default About;
