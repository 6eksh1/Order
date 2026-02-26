import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DeliveryPopup from "../components/DeliveryPopup";
import CustomizePopup from "../components/CustomizePopup";
import "../styles/SpecialOffer.css";


const offers = [
  {
    id: 1,
    title: "🔥 Buy 1 Get 1 Free Pizza",
    description: "Order any large pizza and get another absolutely free.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000",
  },
  {
    id: 2,
    title: "🎉 Family Combo Deal",
    description:
      "2 Large Pizzas + Garlic Bread + 2 Cold Drinks at special price.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1000",
  },
  {
    id: 3,
    title: "🥤 Free Drink Offer",
    description: "Get a free soft drink on orders above £20.",
    image:
      "https://th.bing.com/th?q=Drinks+Background+Images+HD&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
  },
    {
    id: 4,
    title: "👨‍👩‍👧 Family Feast",
    description:
      "Family pack for 4 at just £29.99 including drinks & desserts.",
    image:
      "https://th.bing.com/th/id/OIP.O8onA5psr6N5WakGVL2QDAHaE8?w=262&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
    {
    id: 5,
    title: "🥗 Healthy Bowl Offer",
    description:
      "Flat 25% off on all salads and healthy bowls.",
    image:
      "https://th.bing.com/th/id/OIP.aSsyPfkUZ1SPNTuZJAK6WQHaEK?w=322&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
    {
    id: 6,
    title: "🍰 Sweet Treat Deal",
    description:
      "Free dessert on orders above £20.",
    image:
      "https://th.bing.com/th/id/OIP.drUbGh5vy4HihO1JLy6qmwHaEk?w=263&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
    {
    id: 7,
    title: "🔥 Burger Combo Deal",
    description:
      "Buy 1 Get 1 Free on selected burgers. Limited time offer.",
    image:
      "https://th.bing.com/th/id/OIP.Pp98f7PmkkODstPmJojr2QHaHa?w=190&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
     {
    id: 8,
    title: "🍕 Midnight Madness Deal",
    description:
      "Flat 40% off on all orders placed after 10 PM. Late night cravings sorted!.",
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1000",
  },
    {
    id: 9,
    title: "🎉 Weekend Special",
    description:
      "Flat 30% off on all orders every Saturday & Sunday.",
    image:
      "https://img.freepik.com/premium-vector/weekend-special-food-menu-social-media-post-design_694991-459.jpg",
  },
];

const SpecialOfferPage = () => {
  const [showCustomize, setShowCustomize] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

const handleOrderNow = (offer) => {
  setSelectedOffer(offer);
  setShowCustomize(true);
};
  const handleAddToCart = () => {
    setShowCustomize(false);
    setShowDelivery(true);
  };

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <div className="offer-hero">
        <div className="offer-hero-overlay">
          <h1>Special Offers & Deals</h1>
          <p>Enjoy exclusive discounts and limited time deals 🔥</p>
        </div>
      </div>

      {/* ================= OFFERS SECTION ================= */}
      <div className="offer-container">
        <h2 className="section-title">Today's Best Deals</h2>

        <div className="offer-grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <img src={offer.image} alt={offer.title} />
              <div className="offer-content">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <button
  className="offer-btn"
  onClick={() => handleOrderNow(offer)}
>
  Order Now
</button>
              </div>
            </div>
          ))}
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


        {/* ================= MAP ================= */}
        <div className="map-section">
          <h3>Find Us Here</h3>
          <iframe
            src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="map"
          ></iframe>
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

    <div className="similar-card">
      <img src="https://th.bing.com/th/id/OIP.2SA--bvLjLkRjrPJY8CDbAHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Tandoori Express" />
      <p>Tandoori Express</p>
    </div>

  </div>
</div>
      </div>

      <Footer />
      {/* ================= CUSTOMIZE POPUP ================= */}
      {showCustomize && selectedOffer && (
        <CustomizePopup
          product={selectedOffer}
          size="Regular"
          onClose={() => setShowCustomize(false)}
          onAdd={handleAddToCart}
        />
      )}

      {/* ================= DELIVERY POPUP ================= */}
      {showDelivery && (
        <DeliveryPopup
          total={25}
          onClose={() => setShowDelivery(false)}
        />
      )}
    </>
  );
};

export default SpecialOfferPage;