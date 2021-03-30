import { useState } from "react";
import map from "lodash/map";
import last from "lodash/last";
import styled from "styled-components";
import {
  RiCheckboxBlankCircleFill,
  RiArrowDropRightLine,
} from "react-icons/ri";
import NavDesktop from "./nav/navDesktop";
import myWorks from "../data";

const solution = "solution";
const next = "Next";
const imageXS = (props) => myWorks[props.index].imgXS;
const imageSM = (props) => myWorks[props.index].imgSM;
const imageMD = (props) => myWorks[props.index].imgMD;
const Img = styled.div`
  @media (max-width: 640px) {
    background-image: url(${imageXS});
  }
  @media (min-width: 768px) {
    background-image: url(${imageSM});
  }
  @media (min-width: 1024px) {
    background-image: url(${imageMD});
  }
  background-size: cover;
  background-position: center;
`;
const Portfolio = () => {
  const work = myWorks;
  const [index, setIndex] = useState(0);
  const nextHandler = () => {
    const latest = last(work);
    if (index + 1 === latest.id) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  function dots(item) {
    const clickHandler = () => {
      setIndex(item.id - 1);
    };
    const active = (
      <RiCheckboxBlankCircleFill
        className={`text-${item.id === index + 1 ? "blue" : "gray-300"}`}
      />
    );
    return (
      <div key={item.id}>
        <button
          type="button"
          onClick={clickHandler}
          onKeyPress={clickHandler}
          className="focus:outline-none"
        >
          {active}
        </button>
      </div>
    );
  }
  const dot = map(work, dots);
  return (
    <div className="sm:bg-white xl:items-center xl:justify-center xl:bg-gray-300 flex min-h-screen">
      <div className="rounded-4xl sm:flex-row xl:flex-row-reverse xl:w-75v xl:h-75v xl:bg-white flex flex-col">
        <Img
          index={index}
          className="w-100v 2xl:w-50v h-30v rounded-br-25 sm:w-30v sm:h-80v sm:rounded-br-full xl:w-60v xl:h-75v xl:rounded-r-4xl bg-yellow"
        />
        <div className=" 2xl:my-10h xl:my-10h xl:mx-20 h-60v sm:my-20h sm:w-70v sm:h-80v xl:w-40v mx-12">
          <NavDesktop />
          <div className="md:hidden flex justify-center my-6">{dot}</div>
          <div className="font-display text-md md:text-3xl xl:mt-8 text-gray-800">
            {work[index].title}
          </div>
          <div className="md:text-xl md:mt-4 md:w-50v xl:w-40v 2xl:w-30v xl:text-lg text-sm">
            {work[index].context}
          </div>
          <div className="font-display text-md md:text-2xl md:mt-8 xl:mt-4 xl:text-md text-gray-800">
            {solution}
          </div>
          <div className=" md:w-50v md:text-xl md:mt-4 xl:w-40v 2xl:w-30v xl:text-lg text-sm">
            {work[index].solution}
          </div>
          <button
            type="button"
            onClick={nextHandler}
            className="focus:outline-none flex"
          >
            <div className="bg-blue md:mt-12 xl:mt-4 flex justify-center px-4 py-2 mt-2 text-white rounded-lg">
              {next} <RiArrowDropRightLine className="text-2xl" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
