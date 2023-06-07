import avatar from "/avatar.png"
import dribble from "/dribble.png"
import twitter from "/twitter.png"
import youtube from "/youtube.png"
import { motion } from "framer-motion"
import { useState } from "react"

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
}
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

export default function Nav() {
  const [toggled, setToggled] = useState(false)
  return (
    <nav className=" relative mx-8 mb-24 flex items-center justify-between pb-6 pt-12 font-medium md:mx-16 lg:mx-32">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2  "
        width="250"
        height="4"
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={{ pathLength: 1, opacity: 1 }}
          initial={{ pathLength: 0, opacity: 0 }}
          transition={{ delay: 1, duration: 0.75 }}
          d="M2 2L428 1.99996"
          stroke="#282828"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }}
        className="flex gap-12"
      >
        <img src={avatar} alt="Hua profile picture" />
        <motion.div className="hidden items-center gap-12 xl:flex">
          <img src={dribble} alt="Dribble Account" />
          <img src={twitter} alt="Twitter Account" />
          <img src={youtube} alt="Youtube Channel" />
        </motion.div>
      </motion.div>
      {/* Title */}

      <h1 className="text-lg font-bold">Hua.</h1>

      {/* Nav Items animating in  */}
      {toggled && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0 z-10  flex h-screen w-full
          flex-col items-center justify-center  gap-24  bg-white text-2xl font-bold"
        >
          <motion.a variants={itemMotion} href="#">
            Blog
          </motion.a>
          <motion.a variants={itemMotion} href="#">
            My Work
          </motion.a>
          <motion.a variants={itemMotion} href="/contact">
            Contact
          </motion.a>
        </motion.div>
      )}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        className="hidden xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg   "
      >
        <a href="#">Blog</a>
        <a href="#">My Work</a>
        <a href="/contact">Contact</a>
      </motion.div>

      {/* Hamburger Toggle */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden 
        `}
      >
        <motion.span
          animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
          className="line-1 block h-0.5 w-8 bg-content"
        ></motion.span>

        <motion.span
          animate={{ width: toggled ? 0 : 24 }}
          className="line-2 block h-0.5 w-6 bg-content"
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: toggled ? -45 : 0,
            y: toggled ? -8 : 0,
            width: toggled ? 32 : 24,
          }}
          className="line-3 block h-0.5 w-4 bg-content"
        ></motion.span>
      </motion.div>
    </nav>
  )
}
