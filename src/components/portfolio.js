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
const next = "next";
const image = (props) => myWorks[props.index].img;
const Img = styled.div`
  background-image: url(${image});
  background-position: top;
  background-size: 20vw auto;
`;
const Portfolio = () => {
  const work = myWorks;
  const [index, setIndex] = useState(1);
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
          className="w-100v 2xl:w-50v h-30v bg-yellow rounded-br-25 sm:w-30v sm:h-80v sm:rounded-br-full xl:w-40v xl:h-75v xl:rounded-r-4xl"
        />
        <div className=" 2xl:my-10h xl:my-10h xl:mx-20 h-60v sm:my-20h sm:w-70v sm:h-80v mx-12">
          <NavDesktop />
          <div className="flex justify-center my-6">{dot}</div>
          <div className="font-display text-md">{work[index].title}</div>
          <div className="text-sm">{work[index].context}</div>
          <div className="font-display text-md">{solution}</div>
          <div className="text-sm">{work[index].solution}</div>
          <div className="bg-blue flex justify-center py-1 mt-2 text-white">
            <button
              type="button"
              onClick={nextHandler}
              className="focus:outline-none flex"
            >
              {next} <RiArrowDropRightLine className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
