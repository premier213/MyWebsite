import styled from "styled-components";

const describe = "my name is Meysam I’m a FrontEnd Developer.";
const hi = "Hi there!";
const btn = "about me";
const Button = styled.button`
  -webkit-box-shadow: -4px 6px 0px 0px #ff4a4a;
  box-shadow: -4px 6px 0px 0px #ff4a4a;
`;
const Home = () => (
  <div className="sm:bg-white lg:items-center lg:justify-center lg:bg-gray-300 flex min-h-screen">
    <div className="rounded-4xl lg:w-75v lg:h-75v sm:flex-row lg:flex-row-reverse lg:bg-white flex flex-col">
      <div className="geo-pattern lg:rounded-r-4xl lg:h-75v h-40v bg-yellow rounded-br-25 w-100v sm:w-30v sm:h-80v sm:rounded-br-full lg:w-40v xl:w-40v 2xl:w-50v" />
      <div className="h-60v sm:w-70v sm:h-80v sm:my-20h lg:my-10h my-10h xl:mx-20 2xl:my-15h mx-12">
        <div className="font-display xl:mt-20 2xl:text-6xl text-4xl text-gray-700">
          {hi}
        </div>
        <div className="sm:w-40v xl:max-w-sm xl:mt-8 sm:mt-8 xl:text-2xl 2xl:text-3xl mt-2 text-xl font-thin text-gray-700">
          {describe}
        </div>
        <div className="text-xl font-thin">
          <Button
            type="button"
            className="bg-dark xl:text-lg 2xl:text-2xl px-6 py-3 mt-10 ml-1 text-sm font-thin text-white rounded-lg"
          >
            {btn}
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
