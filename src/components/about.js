import { RiDownloadCloud2Line } from "react-icons/ri";
import NavDesktop from "./nav/navDesktop";
import avatar from "../assets/img/avatar.png";

const name = "Meysam Saberi";
const cv = "Download CV";
const describe =
  "I Am Meysam Saberi Based In Iran, Frontend Developer From Isfahan. I Have Rich Experience In Web Design And Building And Customization, Also I Am Good At React.js.";
const MySkill = "My Skills";
const skills = [
  "React.js",
  "JavaScript",
  "UI & UX",
  "git & github",
  "Figma",
  "Adobe XD",
  "Bootstrap",
  "Tailwindcss",
  "Material UI",
];
const arraySkills = (item) => <li>{item}</li>;
const About = () => (
  <div className="sm:bg-white xl:items-center xl:justify-center xl:bg-gray-300 flex min-h-screen">
    <div className="rounded-4xl sm:flex-row xl:flex-row-reverse xl:w-75v xl:h-75v xl:bg-white flex flex-col">
      <div className="geo-pattern w-100v 2xl:w-50v h-20v bg-yellow rounded-br-25 sm:w-30v sm:h-80v sm:rounded-br-full xl:w-40v xl:h-75v xl:rounded-r-4xl" />
      <div className="my-10h 2xl:my-10h h-60v sm:my-20h sm:w-70v sm:h-80v xl:my-10h xl:mx-20 mx-12">
        <NavDesktop />
        <div className="flex justify-center -mt-40">
          <img src={avatar} alt="profile" className="w-32 h-32 rounded-full" />
        </div>
        <div className="font-display 2xl:text-6xl xl:mt-16 lg:text-5xl mt-2 text-3xl text-center text-gray-700">
          {name}
        </div>
        <div className="2xl:text-3xl sm:mt-8 sm:w-40v xl:mt-8 xl:max-w-sm xl:text-2xl sm:text-3xl flex justify-center mt-2 text-xl text-gray-700">
          <button
            type="button"
            className="bg-red focus:outline-none flex px-4 py-2 text-lg font-thin text-gray-100 rounded-lg"
          >
            {cv}
            <RiDownloadCloud2Line className="flex content-center mx-2 text-2xl" />
          </button>
        </div>
        <div className="mt-4 text-base text-gray-800">{describe}</div>
        <div className="font-display 2xl:text-6xl xl:mt-16 lg:text-5xl mt-2 text-xl text-center text-gray-700">
          {MySkill}
        </div>
        <div className="mt-4 text-base text-gray-800">
          <ul className="flex justify-center truncate">
            {skills.map(arraySkills)}
          </ul>
        </div>
      </div>
    </div>
  </div>
);
export default About;
