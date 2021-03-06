import { NavLink } from "react-router-dom";
import {
  RiHomeLine,
  RiUser4Line,
  RiFolderOpenLine,
  RiMessage3Line,
} from "react-icons/ri";
import { motion } from "framer-motion";

const Nav = () => (
  <div className="flex justify-center">
    <div className="bottom-10 xl:hidden fixed">
      <div className="rounded-3xl bg-gray-200 shadow-md">
        <ul className="flex mx-6">
          <motion.li className="m-6 text-2xl" whileTap={{ scale: 1.5 }}>
            <NavLink to="/" activeClassName="text-red" exact>
              <RiHomeLine />
            </NavLink>
          </motion.li>
          <motion.li className="m-6 text-2xl" whileTap={{ scale: 1.5 }}>
            <NavLink to="/about" activeClassName="text-red">
              <RiUser4Line />
            </NavLink>
          </motion.li>
          <motion.li className="touch m-6 text-2xl" whileTap={{ scale: 1.5 }}>
            <NavLink
              to="/portfolio"
              className="outline-none"
              activeClassName="text-red"
            >
              <RiFolderOpenLine />
            </NavLink>
          </motion.li>
          <motion.li className="m-6 text-2xl" whileTap={{ scale: 1.5 }}>
            <NavLink to="/contact" activeClassName="text-red">
              <RiMessage3Line />
            </NavLink>
          </motion.li>
        </ul>
      </div>
    </div>
  </div>
);

export default Nav;
