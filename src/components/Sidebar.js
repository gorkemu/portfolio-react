import "./nav.css";

const Sidebar = () => {
  return (
    <aside className="fixed flex flex-col justify-center w-20 h-screen bg-black text-sm z-10 ">
      <ul className="flex flex-col items-center justify-center cursor-pointer">
        <li className="p-3 opacity-90 hover:opacity-100 transform transition-colors duration-200">
          <a href="#about">About</a>
        </li>
        <li className="p-3 opacity-90 hover:opacity-100 transform transition-colors duration-200">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-3 opacity-90 hover:opacity-100 transform transition-colors duration-200">
          <a href="#experience">Experience</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
