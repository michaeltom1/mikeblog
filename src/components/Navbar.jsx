import { Link } from "react-router-dom";
import { navItems } from "../constants/data";
import { useRef, useEffect, useState } from "react";
import { useData } from "../contexts/DataProvider";
import { LuMenu, LuX } from "react-icons/lu";

function Navbar() {
  const navrRef = useRef(null);
  const { setNavHeight } = useData();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [testB, setTestB] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
      function toggleNav() {
        const currentValue = window.scrollY;
        if (currentValue > 200) {
          setTestB(true);
        } else if (currentValue < 100) {
          setTestB(false);
        }

        if (currentValue > lastScroll && currentValue > 100) {
          setIsVisible(false);
        } else if (currentValue < lastScroll) {
          setIsVisible(true);
        }
        setLastScroll(currentValue);
      }
      window.addEventListener("scroll", toggleNav);

      return () => removeEventListener("scroll", toggleNav);
    }, [lastScroll]);

  useEffect(() => {
    if (navrRef.current) {
      const height = navrRef.current.offsetHeight;
      setNavHeight(height);
    }
  });
  return (
    <header
      ref={navrRef}
      className={`fixed w-full ${
        testB && "backdrop-blur-md bg-[#cecece83]"
      }  z-50 py-2 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto py-2 p-4 flex items-center justify-between">
        <div>
          <Link to="/" className="text-2xl font-bold">
            Blogs
          </Link>
        </div>
        <div className={`hidden md:flex`}>
          <ul className="flex items-center gap-6 font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link to={item.path}>{item.pathName}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* mobile */}
        <div className={`md:hidden`}>
          <LuMenu onClick={() => setMenu(true)} fontSize={22} />
        </div>
        <div
          // ref={menuRef}
          className={`absolute bg-neutral-800 top-8 right-0  p-4 rounded-xl shadow-xl ${
            menu ? "block" : "hidden"
          }`}
        >
          <LuX
            onClick={() => setMenu(false)}
            fontSize={22}
            className={`float-right`}
          />
          <ul className="flex flex-col gap-4 ">
            {navItems.map((item) => (
              <li key={item.id} onClick={() => setMenu(false)}>
                <Link to={item.path}>{item.pathName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
