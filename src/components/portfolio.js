import map from "lodash/map";
import styled from "styled-components";
import NavDesktop from "./nav/navDesktop";
import myWorks from "../data";

const portfoy = map(myWorks, "title").slice(1, 2);
const Img = styled.div`
  background-image: url(${myWorks[0].img});
  background-position: top;
  background-size: 100vw;
`;
const Portfolio = () => (
  <div className="sm:bg-white xl:items-center xl:justify-center xl:bg-gray-300 flex min-h-screen">
    <div className="rounded-4xl sm:flex-row xl:flex-row-reverse xl:w-75v xl:h-75v xl:bg-white flex flex-col">
      <Img className="w-100v 2xl:w-50v h-30v bg-yellow rounded-br-25 sm:w-30v sm:h-80v sm:rounded-br-full xl:w-40v xl:h-75v xl:rounded-r-4xl" />
      <div className=" 2xl:my-10h xl:my-10h xl:mx-20 h-60v sm:my-20h sm:w-70v sm:h-80v my-10h mx-12">
        <NavDesktop />
        {portfoy}
      </div>
    </div>
  </div>
);

export default Portfolio;
