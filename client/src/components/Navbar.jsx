import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const [ username, setUsername ] = useState("");
  const [ showMenu, setShowMenu ] = useState(false);
  const [ cookies, setCookies ] = useCookies(['access_token']);

  const navigate = useNavigate();

  useEffect(() => {

    const fetchUsername = () => {
      const user = window.localStorage.getItem("username");
        setUsername(user);
    };

    fetchUsername();
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    }

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("username");
    navigate("/");
    window.location.reload();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className=" bg-gray-800 text-white py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="text-xl font-bold pl-4">
          <Link to="/" className="hover:text-yellow-400 font-dancing uppercase text-2xl">{username ? username : ""} Recipes</Link>
        </div>
        <div onClick={toggleMenu} className="flex justify-center items-center cursor-pointer md:hidden w-[25px] h-[25px] mr-6">
          <RxHamburgerMenu className="w-full h-full"/>
        </div>
        <div
          className={`${
            showMenu
              ? "absolute top-[60px] left-0 w-full bg-gray-800 flex flex-col items-start space-y-4 p-4"
              : "hidden"
          } md:flex md:flex-row md:items-center md:space-x-6 md:static md:pr-6`}
        >
          <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
            Home
          </Link>
          <Link to="/create-recipe" className="hover:text-yellow-400 transition-colors duration-300">
            Create Recipe
          </Link>
          
          {(!cookies.access_token) ?    
          <Link to="/auth" className="hover:text-yellow-400 transition-colors duration-300">
          Login/Register </Link> 
            : 
            <>
            <Link to="/saved-recipes" className="hover:text-yellow-400 transition-colors duration-300">
            Saved Recipes </Link>
            <button onClick={logout}>Logout</button>
            </>
            }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
