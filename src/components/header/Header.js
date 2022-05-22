import React from "react";
import "./Header.css";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from '@mui/icons-material/Storefront';

const Header = () => {
  return (
    <div>
       
      <header className="mainHeader">
        <div className="headerdiv">
            <div className="storeIconDiv">
                <div><LocalMallIcon fontSize="large" className="storeIcon item " /></div>
                <p><h4>EEZEPC</h4></p>
            </div>

          <div>
          <input type="text"  className="input" placeholder="Search..." /> 
          </div>
          <div>
          <StorefrontIcon fontSize="large"/>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
