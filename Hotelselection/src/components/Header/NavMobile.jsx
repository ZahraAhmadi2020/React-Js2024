import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import React, { useRef, useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoPricetagsOutline } from "react-icons/io5";
import { PiChatCircleBold } from "react-icons/pi";
import { Link } from "react-scroll";
import { useClickAway } from "react-use";

export const routes = [
  {
    title: "Home",
    href: "hero",
    Icon: BiHomeAlt2,
  },
  {
    title: "Hotels",
    href: "slideshow",
    Icon: FiSearch,
  },
  {
    title: "About Us",
    href: "about",
    Icon: IoPricetagsOutline,
  },
  {
    title: "Contact Us",
    href: "contact",
    Icon: PiChatCircleBold,
  },
];
const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));
  return (
    <div ref={ref} className="lg:hidden mobileNav py-1">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem]   pt-0 bg-neutral-950 border-b border-b-white/20"
          >
            <ul className="grid gap-2 list-unstyled">
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700 my-4"
                  >
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center text-black link-secondary justify-between w-full p-5  rounded-xl bg-neutral-950"
                      }
                      to={route.href}
                    >
                      <Icon className="text-xl mx-2" />
                      <span className="flex gap-1 text-lg">{route.title}</span>
                    </Link>
                  </motion.li>
                );
              })}
              <Link to="signup" className="m-5">
                {" "}
                <button className="btn btn-outline-info">
                  Sign up / Log in
                </button>
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default NavMobile;
