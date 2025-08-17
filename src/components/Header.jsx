import { useState } from "react";
import { Logo } from "../utilities/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus"; 
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn]  = useState('Login')
  const IsOnline = useOnlineStatus();
  const cartItems = useSelector((store)=> store.cart.items)
  console.log(cartItems)
  return (
    <header className="bg-cyan-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

       <button onClick={()=>{
        if(btn === 'Login'){
          setBtn('Logout')
        }else{
          setBtn('Login')
        }

       }} className="border-1 transition-all duration-150 bg-cyan-300 hover:bg-cyan-500 active:scale-95 hover:border-2 rounded-2xl min-w-40 border-black p-1 px-4 cursor-pointer">{btn}</button>
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 border-2 border-cyan-100 rounded-full shadow"
            src={Logo}
            alt="free-logo"
          />
          <span className="text-xl font-bold text-cyan-700">Urban Bites</span>
        </div>
        <nav>
          <ul className="flex gap-8 items-center text-cyan-700 font-bold">
            <li>Online Status:{IsOnline? " ✅":"🔴"}</li>
            <li className="hover:text-cyan-900 transition-colors cursor-pointer flex ">
              <Link to={"/cart"} className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
             <div className="text-lg font-bold">({cartItems.length} items)</div>
             </Link>
            </li>
            <li><Link to="/" className="hover:text-cyan-900 transition-colors cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
              </svg>
              </Link>
            </li>
            <li> <Link to="/grocery">Grocery</Link> </li>

            <li> <Link to="/about" className="hover:text-cyan-900 transition-colors cursor-pointer">
              About
              </Link>
            </li>
            <li className="hover:text-cyan-900 transition-colors cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
