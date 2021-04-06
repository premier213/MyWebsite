import { motion } from "framer-motion";
import NavDesktop from "./nav/navDesktop";

const describe = "Page Not Found";
const hi = "Oops!";
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
const NotFound = () => (
  <div className="sm:bg-white xl:items-center xl:justify-center xl:bg-gray-300 flex min-h-screen">
    <div className="rounded-4xl sm:flex-row xl:flex-row-reverse xl:w-75v xl:h-75v xl:bg-white flex flex-col">
      <div className="geo-pattern w-100v 2xl:w-50v h-40v bg-yellow rounded-br-25 sm:w-30v sm:h-80v sm:rounded-br-full xl:w-40v xl:h-75v xl:rounded-r-4xl" />
      <div className="my-10h 2xl:my-10h h-60v sm:my-20h sm:w-70v sm:h-80v xl:my-10h xl:mx-20 mx-12">
        <NavDesktop />
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="font-display 2xl:text-6xl xl:mt-16 lg:text-5xl text-4xl text-gray-700"
          >
            {hi}
          </motion.div>
          <motion.div
            variants={item}
            className="2xl:text-3xl sm:mt-8 sm:w-40v xl:mt-8 xl:max-w-sm xl:text-2xl sm:text-3xl mt-2 text-xl font-thin text-gray-700"
          >
            {describe}
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
);
export default NotFound;
