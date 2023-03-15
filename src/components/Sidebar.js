import { FiGithub, FiLinkedin } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="fixed hidden md:flex flex-col justify-center w-20 h-screen bg-black text-sm z-10 ">
      <ul className="flex flex-col items-center justify-center cursor-pointer">
        <li className="p-5 hover:text-yellow hover:-translate-y-1 text-xl transform transition-all duration-200">
          <a href="https://github.com/gorkemu" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
        </li>
        <li className="p-5  hover:text-yellow hover:-translate-y-1 text-xl transform transition-all duration-200">
          <a
            href="https://www.linkedin.com/in/gorkemunal/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
