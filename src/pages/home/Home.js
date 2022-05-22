import React from "react";
import Routing from "../../routing/Routing";
import Cart from "../../components/cart/Cart";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* <Routing/> */}
      <div className="cartSetting">
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
      </div>
      <div className="cartSetting">
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
      </div>
      <div className="cartSetting">
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
};
export default Home;
