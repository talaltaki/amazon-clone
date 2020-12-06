import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="Nintendo Switch - Wildcat Bundle Fortnite Edition w/ adaptor"
            price={595.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81OIivgIbvL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="PlayStation 4 Pro 1TB Console"
            price={335.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Nintendo Joy-Con (L/R) - Neon Red/Neon Blue"
            price={89.99}
            image="https://images-na.ssl-images-amazon.com/images/I/419FlaUst7L._AC_US218_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Fossil Unisex 44MM Gen 5 Carlyle HR Heart Rate Stainless Steel and Silicone Touchscreen Smart Watch, Color: Black (Model: FTW4025)"
            price={259.99}
            image="https://images-na.ssl-images-amazon.com/images/I/318LcIR9MGL._AC_US218_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Logitech G502 Hero High Performance Gaming Mouse"
            price={37.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31BzhyIRe5L._AC_US218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="DualShock 4 Wireless Controller for PlayStation 4 - Jet Black"
            price={59.99}
            image="https://m.media-amazon.com/images/I/61IG46p-yHL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
