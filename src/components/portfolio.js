import styled from "styled-components";
import NavDesktop from "./nav/navDesktop";

const Portfolio = () => (
  <div className="sm:bg-white xl:items-center xl:justify-center xl:bg-gray-300 flex min-h-screen">
    <div className="rounded-4xl sm:flex-row xl:flex-row-reverse xl:w-75v xl:h-75v xl:bg-white flex flex-col">
      <div className="geo-pattern w-100v 2xl:w-50v h-20v bg-yellow rounded-br-25 sm:w-30v sm:h-80v sm:rounded-br-full xl:w-40v xl:h-75v xl:rounded-r-4xl" />
      <div className=" 2xl:my-10h xl:my-10h xl:mx-20 h-60v sm:my-20h sm:w-70v sm:h-80v my-10h mx-12">
        <NavDesktop />
      </div>
    </div>
  </div>
);

export default Portfolio;
