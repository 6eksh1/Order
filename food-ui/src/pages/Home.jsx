import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DeliveryPopup from "../components/DeliveryPopup";
import CustomizePopup from "../components/CustomizePopup";
/* ================= NAVBAR ================= */

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-wrapper">

        <Link to="/" className="logo">
          Order <span className="logo-box"></span>
        </Link>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/offers" className="nav-item">
              Special Offers
            </NavLink>
          </li>

          <li>
            <NavLink to="/restaurant" className="nav-item">
              Restaurants
            </NavLink>
          </li>

          <li>
            <NavLink to="/order" className="nav-item">
              Order
            </NavLink>
          </li>

          <li>
            <button className="btn-outline">Login</button>
          </li>

          <li>
            <button className="btn-primary">Sign Up</button>
          </li>
        </ul>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
};

/* ================= HERO ================= */

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1>
            Feast Your Senses, <br />
            <span>Fast and Fresh</span>
          </h1>
          <p>Order delicious food from top restaurants near you</p>

          <div className="hero-search">
            <input type="text" placeholder="Enter postcode..." />
            <button className="btn-primary">Search</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Food"
            />
          </div>

          <div className="order-steps">
            <div className="step-card">
              <span className="step-number">1</span>
              <h4>Select Restaurant</h4>
              <p>Choose from 500+ restaurants near you</p>
            </div>

            <div className="step-card">
              <span className="step-number">2</span>
              <h4>Choose Menu</h4>
              <p>Pick your favorite dishes & customize</p>
            </div>

            <div className="step-card">
              <span className="step-number">3</span>
              <h4>Fast Delivery</h4>
              <p>Get food delivered in 30 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= DEALS SECTION ================= */

const DealsSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h2>Up to -40% Order.uk exclusive deals</h2>

        <div className="card-grid">
          <div className="deal-card">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349"
              alt="Chef Burgers London"
            />
            <div className="deal-overlay">
              <h3>Chef Burgers London</h3>
            </div>
          </div>

          <div className="deal-card">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Grand AI Cafe"
            />
            <div className="deal-overlay">
              <h3>Grand AI Cafe</h3>
            </div>
          </div>

          <div className="deal-card">
            <img
              src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9"
              alt="Butterbrot Cafe London"
            />
            <div className="deal-overlay">
              <h3>Butterbrot Cafe London</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= CATEGORIES ================= */

const categories = [
  {
    id: 1,
    name: "Burgers & Fast Food",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 2,
    name: "Salads",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    id: 3,
    name: "Pasta & Caserole",
    image:
      "https://homepressurecooking.com/wp-content/uploads/2024/09/penne-pasta-casserole-recipe-1725548879.jpg",
  },
  {
    id: 4,
    name: "Pizza",
    image:
      "https://www.bing.com/th/id/OIP.I-TrGXBK4GKD38-9qUXbNgHaHa?w=188&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 5,
    name: "Breakfast",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    id: 6,
    name: "Soups",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554",
  },
];

const Categories = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Order.uk Popular Categories 🍔</h2>

        <div className="categories-grid">
          {categories.map((item) => (
            <div key={item.id} className="category-card">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= RESTAURANTS ================= */

const restaurants = [
  {
    name: "Italian Pizza Hub",
    image:
      "https://www.bing.com/th/id/OIP.2dhr5Ln6cMHIu9SmwE_uBgHaE7?w=249&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    rating: "4.5",
    category: "Italian",
  },
  {
    name: "Spicy Indian House",
    image:
      "https://www.bing.com/th/id/OIP.Vs0ADb20iVE90kdI_KYPbwHaHa?w=162&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    rating: "4.7",
    category: "Indian",
  },
  {
    name: "Burger King Spot",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
    rating: "4.3",
    category: "Fast Food",
  },
  {
    name: "KFC",
    image:
      "https://www.bing.com/th/id/OIP.mCqQzBG6L-G49lpSM8P3OQHaNK?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    rating: "4.7",
    category: "Fast Food",
  },
];

const Restaurants = () => {
  return (
    <section className="restaurants">
      <div className="container">
        <h2 className="section-title">Popular Restaurants</h2>

        <div className="restaurant-grid">
          {restaurants.map((item, index) => (
            <div key={index} className="restaurant-card">
              <img src={item.image} alt={item.name} />
              <div className="restaurant-info">
                <h4>{item.name}</h4>
                <p>{item.category}</p>
                <span>⭐ {item.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= ABOUT ================= */

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container about-wrapper">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
            alt="About Us"
          />
        </div>

        <div className="about-content">
          <h2>Know More About Us</h2>
          <p>
            We deliver fresh and delicious food from the best restaurants
            around you. Our platform connects food lovers with top-rated
            restaurants for a seamless and fast ordering experience.
          </p>

          <ul>
            <li>✔ 500+ Restaurants</li>
            <li>✔ Fast Delivery</li>
            <li>✔ Easy Online Payment</li>
            <li>✔ 24/7 Customer Support</li>
          </ul>

          <button className="btn-primary">Explore More</button>
        </div>
      </div>
    </section>
  );
};

/* ================= STATS ================= */

const Stats = () => {
  return (
    <section className="stats">
      <div className="container stats-grid">
        <div>546+ Registered Riders</div>
        <div>789,900+ Orders Delivered</div>
        <div>690+ Restaurants Partnered</div>
        <div>17,457+ Food Items</div>
      </div>
    </section>
  );
};

/* ================= FOOTER ================= */

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2 className="logo">
            Order<span>🟧</span>
          </h2>
          <p>© {new Date().getFullYear()} Order.uk. All rights reserved.</p>
        </div>

        <div>
          <h4>Legal Pages</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
        </div>

        <div>
          <h4>Important Links</h4>
          <ul>
            <li>Get Help</li>
            <li>Restaurants</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

/* ================= MAIN HOME COMPONENT ================= */

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <DealsSection />
      <Categories />
      <Restaurants />
      <AboutSection />
      <Stats />
      <Footer />
    </>
  );
};

export default Home;