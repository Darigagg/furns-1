import React from "react";
import "./Head.scss"
import {IoIosArrowDown} from "react-icons/io"
import {AiOutlineSearch} from "react-icons/ai"
import {CiUser} from "react-icons/ci"
import {HiOutlineShoppingBag} from "react-icons/hi"

function Header() {

    const [lang, setLang] = React.useState(true)

    return (
      <div className="Header">
        <header className="main-div-1">
            
            <div className="mini-div-1">
                <h4 className="text-1">Default Welcome Message</h4>
            </div>
            <div className="mini-div-2">
            
                <div className="mini-div-3" onClick={() => setLang(!lang)}>
                    <h4 className="text-2">English</h4>
                    <IoIosArrowDown className="arrow-1"/>
                </div>
                <div className="mini-div-4">
                    <h4 className="text-3">USD</h4>
                    <IoIosArrowDown className="arrow-2"/>
                </div>

            </div>
        
        </header>

        <header className="main-div-2"> 

            <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=1920&q=75" alt="error" />

            <div className="mini-div-5">
                <AiOutlineSearch className="elem-1"/>
                <CiUser className="elem-2"/>
                <HiOutlineShoppingBag className="elem-3"/>
            </div>

        </header>

        <header className="main-div-3">

            <div className="mini-div-6">

                <div>
                
                    <h4>Home</h4>
                    <IoIosArrowDown className="arrow-3"/>
                
                </div>
                
                <h4>About</h4>
                
                <div>

                    <h4>Home Furniture</h4>
                    <IoIosArrowDown className="arrow-4"/>

                </div>

                <div>

                    <h4>Office Furniture</h4>
                    <IoIosArrowDown className="arrow-5"/>

                </div>

                <div>
                    <h4>Hospital Furniture</h4>
                    <IoIosArrowDown className="arrow-6"/>

                </div>

                <h4>Contact</h4>

            </div>

        </header>
      
      </div>
    );
  }
  
  export default Header;