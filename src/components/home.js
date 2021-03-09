import styled from "styled-components";
import { Link } from "react-router-dom";
import NavDesktop from "./nav/navDesktop";

const describe = "my name is Meysam I’m a FrontEnd Developer.";
const hi = "Hi there!";
const btn = "about me";
const Button = styled.button`
  -webkit-box-shadow: -4px 6px 0px 0px #ff4a4a;
  box-shadow: -4px 6px 0px 0px #ff4a4a;
`;
const Home = () => (
  <div className="sm:bg-white xl:items-center xl:justify-center xl:bg-gray-300 flex min-h-screen">
    <div className="rounded-4xl sm:flex-row xl:flex-row-reverse xl:w-75v xl:h-75v xl:bg-white flex flex-col">
      <div className="geo-pattern w-100v 2xl:w-50v h-40v bg-yellow rounded-br-25 sm:w-30v sm:h-80v sm:rounded-br-full xl:w-40v xl:h-75v xl:rounded-r-4xl" />
      <div className="my-10h 2xl:my-10h h-60v sm:my-20h sm:w-70v sm:h-80v xl:my-10h xl:mx-20 mx-12">
        <NavDesktop />
        <div className="font-display 2xl:text-6xl xl:mt-16 text-4xl text-gray-700">
          {hi}
        </div>
        <div className="2xl:text-3xl sm:mt-8 sm:w-40v xl:mt-8 xl:max-w-sm xl:text-2xl mt-2 text-xl font-thin text-gray-700">
          {describe}
        </div>
        <div className="text-xl font-thin">
          <Button
            type="button"
            className="2xl:text-2xl bg-dark xl:text-lg focus:outline-none px-6 py-3 mt-10 ml-1 text-sm font-thin text-white rounded-lg"
          >
            <Link to="/about">{btn}</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
