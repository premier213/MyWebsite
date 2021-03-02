import {
  RiHomeLine,
  RiUser4Line,
  RiFolderOpenLine,
  RiMessage3Line,
} from "react-icons/ri";

const Nav = (props) => {
  const { children } = props;
  return (
    <div className="relative h-screen w-screen">
      {children}
      <div className="relative flex justify-center">
        <div className="absolute bottom-0 lg:hidden">
          <div className="bg-gray-200 mb-8 shadow-md rounded-3xl">
            <ul className="flex mx-6">
              <li className="m-6">
                <RiHomeLine />
              </li>
              <li className="m-6">
                <RiUser4Line />
              </li>
              <li className="m-6">
                <RiFolderOpenLine />
              </li>
              <li className="m-6">
                <RiMessage3Line />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
