import { useState } from "react";
import "../styles/RestaurantPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DeliveryPopup from "../components/DeliveryPopup";
import CustomizePopup from "../components/CustomizePopup";

const RestaurantPage = () => {
  const [showCustomize, setShowCustomize] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [activeCategory, setActiveCategory] = useState("offers");
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ MENU DATA WITH OFFERS ADDED
  const menuData = {
    offers: [
      {
        id: 1,
        name: "Big Mac Combo Offer",
        price: "$18",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      },
      {
        id: 2,
        name: "2 Chicken Burgers + Fries",
        price: "$20",
        img: "https://th.bing.com/th/id/OIP.can00hvFrJJKvOShYFLUywHaE8?w=249&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      },
      {
        id: 3,
        name: "Family Meal Deal",
        price: "$35",
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      },
    ],

    burgers: [
      { id: 1, name: "Royal Cheese Burger", price: "$12", img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
      { id: 2, name: "Chicken Burger", price: "$10", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
      { id: 3, name: "Double Patty Burger", price: "$15", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b" },
      { id: 4, name: "BBQ Burger", price: "$13", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086" },
      { id: 5, name: "Spicy Burger", price: "$11", img: "https://th.bing.com/th/id/OIP.z-3Ij2JCK3bgl57Pi5VM4QHaEw?w=286&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    ],

    fries: [
      { id: 1, name: "Classic Fries", price: "$4", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877" },
      { id: 2, name: "Cheese Fries", price: "$5", img: "https://th.bing.com/th/id/OIP.qjGpqpq2Ni2e1h6c25CULwHaHa?w=172&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
      { id: 3, name: "Peri Peri Fries", price: "$5.5", img: "https://th.bing.com/th/id/OIP.lf6chq1RDevswl43k6umywHaFj?w=240&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
      { id: 4, name: "Loaded Fries", price: "$6", img: "https://images.unsplash.com/photo-1606755456206-b25206cde27e" },
      { id: 5, name: "Curly Fries", price: "$4.5", img: "https://th.bing.com/th/id/OIP.ccF1dOpbqp9-jDD3gkzUmQHaFj?w=204&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    ],

    drinks: [
      { id: 1, name: "Coca Cola", price: "$3", img: "https://th.bing.com/th/id/OIP.n_JCBhO7VnIfkyPeXJrsnAHaEo?w=272&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
      { id: 2, name: "Pepsi", price: "$3", img: "https://th.bing.com/th/id/OIP.4gokWFHHvEVY4XmgMqa1VQHaHk?w=176&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
      { id: 3, name: "Orange Juice", price: "$4", img: "https://th.bing.com/th/id/OIP.kg3A1J2lH3Lsu-CyFao3iwHaEK?w=333&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
      { id: 4, name: "Milkshake", price: "$5", img: "https://th.bing.com/th/id/OIP.rDEtnYM8XIbixN5YSmXNCAHaHa?w=181&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
      { id: 5, name: "Lemonade", price: "$3.5", img: "https://th.bing.com/th/id/OIP.kHeeANcHIL3SSxO7B8MozwHaEu?w=259&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    ],
  };

  // ✅ FILTER ITEMS
  const filteredItems =
    menuData[activeCategory]?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="restaurant-hero">
        <div className="hero-overlay">
          <div className="hero-left">
            <p>I’m lovin’ it!</p>
            <h1>McDonald's East London</h1>
            <div className="hero-badges">
              <span className="badge">🛒 Minimum Order: 12 GBP</span>
              <span className="badge">🚴 Delivery in 20–25 Minutes</span>
            </div>
            <div className="open-time">🕒 Open until 11:00 PM</div>
          </div>

          <div className="rating-card">
            <h2>3.4</h2>
            <p>⭐⭐⭐☆</p>
            <span>1,360 reviews</span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="offers-header">
        <h2>All Offers from McDonald’s East London</h2>
        <input
          type="text"
          placeholder="Search from menu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* CATEGORY TABS */}
      <div className="category-tabs">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            className={`tab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* MENU DISPLAY */}
      <div className="restaurant-container">
        <div className="menu-section">
          <h2>
            {activeCategory.charAt(0).toUpperCase() +
              activeCategory.slice(1)}
          </h2>

          <div className="menu-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-card">
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.price}</p>
<button onClick={() => setShowCustomize(true)}>
  Add
</button>
              </div>
            ))}
          </div>
        </div>

<div className="info-card">

  {/* ===== DELIVERY INFORMATION ===== */}
  <div className="info-column">
    <h3>Delivery Information</h3>

    <div className="info-list">
      <p><span>Monday:</span> 10 AM - 11 PM</p>
      <p><span>Tuesday:</span> 8 AM - 10 PM</p>
      <p><span>Wednesday:</span> 11 AM - 11 PM</p>
      <p><span>Thursday:</span> 9 AM - 10 PM</p>
      <p><span>Friday:</span> 10 AM - 11 PM</p>
      <p><span>Saturday:</span> 8 AM - 11 PM</p>
      <p><span>Sunday:</span> 8 AM - 10 PM</p>
    </div>

    <div className="delivery-time">
      ⏱ Estimated Delivery: <strong>20 mins</strong>
    </div>
  </div>

  {/* ===== CONTACT INFORMATION ===== */}
  <div className="info-column">
    <h3>Contact Information</h3>

    <p className="info-text">
      If you have allergies or other dietary restrictions, please contact
      the restaurant. The restaurant will provide food-specific information
      upon request.
    </p>

    <div className="contact-details">
      <p><strong>Phone:</strong> +44 123 456 789</p>
      <p><strong>Website:</strong> 
        <a href="http://mcdonalds.uk/" target="_blank" rel="noreferrer">
          mcdonalds.uk
        </a>
      </p>
    </div>
  </div>

  {/* ===== OPERATIONAL TIMES ===== */}
  <div className="info-column">
    <h3>Operational Times</h3>

    <div className="info-list">
      <p><span>Monday:</span> 10 AM - 11 PM</p>
      <p><span>Tuesday:</span> 8 AM - 10 PM</p>
      <p><span>Wednesday:</span> 11 AM - 11 PM</p>
      <p><span>Thursday:</span> 9 AM - 10 PM</p>
      <p><span>Friday:</span> 10 AM - 11 PM</p>
      <p><span>Saturday:</span> 8 AM - 11 PM</p>
      <p><span>Sunday:</span> 8 AM - 10 PM</p>
    </div>
  </div>

</div>

        {/* ===== MAP SECTION ===== */}
        <div className="map-section">
          <h2>Location</h2>
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>

{/* ================= REVIEWS ================= */}
<div className="reviews-section">
  <h3 className="section-title">Customer Reviews</h3>

  <div className="review-grid">

    <div className="review-card">
      <div className="review-header">
        <div className="review-avatar">A</div>
        <div>
          <h4>Alex Brown</h4>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
      <p className="review-text">
        Amazing taste and super fast delivery. Highly recommended!
      </p>
    </div>

    <div className="review-card">
      <div className="review-header">
        <div className="review-avatar">S</div>
        <div>
          <h4>Sarah Wilson</h4>
          <p>⭐⭐⭐⭐</p>
        </div>
      </div>
      <p className="review-text">
        Great service and fresh pizza. Loved the family combo deal.
      </p>
    </div>

    <div className="review-card">
      <div className="review-header">
        <div className="review-avatar">M</div>
        <div>
          <h4>Michael Lee</h4>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
      <p className="review-text">
        Best offers in town and very friendly staff!
      </p>
    </div>

    <div className="review-card">
      <div className="review-header">
        <div className="review-avatar">E</div>
        <div>
          <h4>Emily Clark</h4>
          <p>⭐⭐⭐⭐</p>
        </div>
      </div>
      <p className="review-text">
        Quick delivery and amazing discounts every weekend.
      </p>
    </div>

  </div>
</div>


{/* ================= SIMILAR RESTAURANTS ================= */}
<div className="similar-section">
  <h3 className="section-title">Similar Restaurants</h3>

  <div className="similar-grid">

    <div className="similar-card">
       <img src="https://cdn-icons-png.flaticon.com/512/3595/3595458.png" alt="Italiano Pizza" />
      <p>Italiano Pizza</p>
    </div>

    <div className="similar-card">
      <img src="https://tse1.mm.bing.net/th/id/OIP.MbgcIA1YiVzdY3P9ivNYzQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Spicy Grill House" />
      <p>Spicy Grill House</p>
    </div>

    <div className="similar-card">
      <img src="https://th.bing.com/th/id/OIP.pLBYppeQR9CnjjvnzUB6UQHaHa?w=194&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Kebab King" />
      <p>Kebab King</p>
    </div>

    <div className="similar-card">
      <img src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png" alt="Burger Town" />
      <p>Burger Town</p>
    </div>

  </div>
</div>

      </div>

      <Footer />

      {/* ================= POPUP INTEGRATION ================= */}

      {showCustomize && (
        <CustomizePopup
          onClose={() => setShowCustomize(false)}
          onConfirm={() => {
            setShowCustomize(false);
            setShowDelivery(true); // open delivery after customize
          }}
        />
      )}

      {showDelivery && (
        <DeliveryPopup
          onClose={() => setShowDelivery(false)}
        />
      )}
    </>
  );
};

export default RestaurantPage;