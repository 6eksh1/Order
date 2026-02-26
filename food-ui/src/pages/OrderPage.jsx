import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DeliveryPopup from "../components/DeliveryPopup";
import CustomizePopup from "../components/CustomizePopup";
import "../styles/Order.css";

const categories = [
  "Pizzas",
  "Garlic Bread",
  "Calzone",
  "Kebabs",
  "Salads",
  "Cold drinks",
  "Desserts",
  "Hot drinks",
  "Sauces",
];

const menuData = {
  Pizzas: [
    {
      id: 1,
      name: "Farm House Xtreme Pizza",
      description: "Loaded with cheese and vegetables.",
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=600",
      prices: { Small: 21.9, Medium: 25.9, Large: 27.9 },
    },
    {
      id: 2,
      name: "Tandoori Pizza",
      description: "Spicy tandoori chicken with capsicum.",
      image:
        "https://th.bing.com/th/id/OIP.2DwB1hlwekmYxNNZS99N-AHaE8?w=261&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Small: 19.9, Medium: 23.9, Large: 26.9 },
    },
        {
      id: 3,
      name: "Chicken Pizza",
      description: "Savory marinated chicken and melted mozzarella.",
      image:
        "https://th.bing.com/th?q=Chicken+Pizza+Image+HD+Black+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      prices: { Small: 17.9, Medium: 21.9, Large: 29.9 },
    },
        {
      id: 4,
      name: "Cheesy Chicken Pizza",
      description: "Stuffed with chicken and mozzarella.",
      image:
        "https://th.bing.com/th/id/OIP.qPhwcdTxtEVV-IBvK52-oQHaHa?w=164&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Small: 19.9, Medium: 23.9, Large: 26.9 },
    },
        {
      id: 5,
      name: "Thin Crust Pizza",
      description: "Golden-baked,Crispy Crust topped with chicken and mozzarella.",
      image:
        "https://th.bing.com/th/id/OIP.jsscINkTrnOKby7sRTIzLwHaEK?w=300&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Small: 18.9, Medium: 20.9, Large: 25.9 },
    },
  ],

  "Garlic Bread": [
    {
      id: 6,
      name: "Classic Garlic Bread",
      description: "Freshly baked garlic bread with herbs.",
      image:
        "https://th.bing.com/th/id/OIP.TL1F99xl8HUM8Jtt_z-i8gHaJQ?w=125&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 5.9, Large: 7.9 },
    },
        {
      id: 7,
      name: "Cheese Garlic Bread",
      description: "Freshly baked garlic bread with herbs and mozzarella.",
      image:
        "https://th.bing.com/th/id/OIP.W7MCfOd9uf_GbQAYO-BW2AHaKV?w=186&h=260&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 4.9, Large: 7.9 },
    },
        {
      id: 8,
      name: "Corn and Cheese Garlic Bread",
      description: "Baked garlic bread with Corn and mozzarella.",
      image:
        "https://www.bing.com/th/id/OIP.haunejBYIwubFLhDxVNntwHaJQ?w=140&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 9.9, Large: 15.9 },
    },
        {
      id: 9,
      name: "Paneer Tikka Stuffed Garlic Bread",
      description: "Paneer Tikka Stuffed in Baked garlic bread.",
      image:
        "https://th.bing.com/th/id/OIP.ynd13oWfNsyME1Z3bN92-wHaHa?w=157&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 15.9, Large: 17.9 },
    },
        {
      id: 10,
      name: "Chicken Pepperoni Stuffed Garlic Bread",
      description: "Chicken Pepperoni Stuffed in Baked garlic bread.",
      image:
        "https://www.cravingsamericaneatery.com/wp-content/uploads/2021/01/pepperoni.jpg",
      prices: { Regular: 7.9, Large: 9.9 },
    },
  ],

  Calzone: [
    {
      id: 11,
      name: "Chicken Calzone",
      description: "Stuffed with chicken and mozzarella.",
      image:
        "https://th.bing.com/th/id/OIP.vTg56LGkUdFtJVAoXb1GiwHaE7?w=251&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 12.9 },
    },
        {
      id: 12,
      name: "Meatball Parmesan Calzone",
      description: "Stuffed with Meatball and Parmesan Cheese.",
      image:
        "https://th.bing.com/th/id/OIP.EmrnkgpmcgBH9BXpvv2_xwHaE7?w=274&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 15.9 },
    },
        {
      id: 13,
      name: "Mini Spinach Ricotta Calzone",
      description: "Stuffed with Spinach and Ricotta Cheese.",
      image:
        "https://th.bing.com/th/id/OIP.e1Efuc9GBIBLT3qiKY65hgHaHa?w=164&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 15.9 },
    },
        {
      id: 14,
      name: "Bacon-Cheeseburger Calzone",
      description: "Stuffed with Bacon and mozzarella.",
      image:
        "https://th.bing.com/th/id/OIP.Dky-waIq2f5X6gMS7PSqXQHaEK?w=281&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 22.9 },
    },
        {
      id: 15,
      name: "BBQ Chicken Calzone",
      description: "Stuffed with BBQ chicken.",
      image:
        "https://th.bing.com/th/id/OIP.Y9tnow5hDU2-UFPuMKxotgHaHa?w=149&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 24.9 },
    },
  ],

  Kebabs: [
    {
      id: 16,
      name: "Doner Kebab",
      description: "Served with salad and sauces.",
      image:
        "https://th.bing.com/th/id/OIP.Rd1ex3UegUfkfvQaKpbcXwHaE7?w=275&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 9.9, Large: 12.9 },
    },
        {
      id: 17,
      name: "Hariyali Kebab",
      description: "Chicken marianted with green mixture of mint.",
      image:
        "https://th.bing.com/th?q=Hariyali+Kabab+HD&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      prices: { Regular: 6.9, Large: 10.9 },
    },
        {
      id: 18,
      name: "Shish Kebab",
      description: "Chunks of lamb marinated and grilled on a skewer.",
      image:
        "https://th.bing.com/th/id/OIP.b4ee1a36k3tMhgRQM0DHzgAAAA?w=134&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 11.9, Large: 13.9 },
    },
        {
      id: 19,
      name: "Kofta Kebab",
      description: "Minced meat mixed with spices and herbs.",
      image:
        "https://th.bing.com/th/id/OIP.u0Qz_b9GtuFZ7WwZwoqDJgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      prices: { Regular: 6.9, Large: 12.9 },
    },
        {
      id: 20,
      name: " Seekh Kebab",
      description: "Minced meat mixed with spices and herbs,molded onto skewer and grilled.",
      image:
        "https://th.bing.com/th/id/OIP.I1nveO29EntzLNah0ZTPvAHaEY?w=296&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 8.9, Large: 13.9 },
    },
        {
      id: 21,
      name: "Galoti Kebab",
      description: "extremely soft,spiced patties with meat.",
      image:
        "https://th.bing.com/th/id/OIP.3VotrfHFagNZ9yDldipIcgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      prices: { Regular: 7.9, Large: 12.9 },
    },
  ],

  Salads: [
    {
      id: 22,
      name: "Greek Salad",
      description: "Fresh cucumber, olives, feta cheese.",
      image:
        "https://th.bing.com/th/id/OIP.iNepdgWHoT6nZ6gJUJonkwHaEJ?w=316&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 6.9 },
    },
        {
      id: 23,
      name: " Green Salad",
      description: "Lettuce, Spinach.",
      image:
        "https://th.bing.com/th/id/OIP.IGOu8Hd90dnFVHtVdCZ6XwHaEK?w=293&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 12.9 },
    },
        {
      id: 24,
      name: "Vegetable Salad",
      description: "Raw or Cooked Vegetables.",
      image:
        "https://th.bing.com/th/id/R.a7c990338d7f7a13978b10d40c78508c?rik=8g30r5IcD84Lzg&riu=http%3a%2f%2feskipaper.com%2fimages%2fvegetable-salad-wallpaper-1.jpg&ehk=nZlYCohTDzlnDLfawf%2bum8fSmw6nY6Ah32vCfhuGibA%3d&risl=&pid=ImgRaw&r=0",
      prices: { Regular: 13.9 },
    },
        {
      id: 25,
      name: "Grain Salad",
      description: "Pasta, Rice, Quinoa, Lentils.",
      image:
        "https://th.bing.com/th/id/OIP.-eykijcxBemKZlCbLL_etgHaLG?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 15.9 },
    },
        {
      id: 26,
      name: "Fruit Salad",
      description: "Mix of fresh fruits or cannrd fruits.",
      image:
        "https://th.bing.com/th?q=Fruit+Salad+with+Ice+Cream+HD&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      prices: { Regular: 10.9 },
    },
        {
      id: 27,
      name: "Gelatin Salad",
      description: "Made with flavored gelatin,often with fruit,nuts or cream cheese.",
      image:
        "https://th.bing.com/th/id/OIP.Mup5Xd7j8_drwNgumWwoOgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      prices: { Regular: 20.9 },
    },
  ],

  "Cold drinks": [
    {
      id: 28,
      name: "Coca Cola",
      description: "Refreshing cold drink.",
      image:
        "https://th.bing.com/th/id/OIP.v28zz-QlbdZDhf_g04WBjgAAAA?w=144&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Can: 1.5, Bottle: 2.5 },
    },
        {
      id: 29,
      name: "Energy Drink",
      description: "Provide a boost.",
      image:
        "https://th.bing.com/th/id/OIP.6WWZuk2nw8Do9MEX4oLDBwHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Can: 2.5, Bottle: 3.5 },
    },
        {
      id: 30,
      name: "Fruit Juices",
      description: "Packaged or Fresh juices.",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.7Lq9GIbLVWqWbn4WZV1tXAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      prices: { Can: 1.5, Bottle: 3.5 },
    },
        {
      id: 31,
      name: "Milkshakes",
      description: "Dairy-Based drinks.",
      image:
        "https://th.bing.com/th/id/OIP.dpn46RKN9UpAOeJ4LvSVTwHaE_?w=273&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Can: 2.5, Bottle: 5.5 },
    },
        {
      id: 32,
      name: "Iced Tea or Coffee",
      description: "Brewed tea or coffee served over ice.",
      image:
        "https://th.bing.com/th/id/OIP.xrLmjLPjqyElM8gluVqK8AHaNK?w=115&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Can: 3.5, Bottle: 5.5 },
    },
        {
      id: 33,
      name: "Flavored water",
      description: "Coconut water, Sparkling water.",
      image:
        "https://th.bing.com/th/id/OIP.FvgoSEjeZjT7eR4aM8MxVwHaEJ?w=293&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Can: 4.5, Bottle: 6.5 },
    },
  ],

  Desserts: [
    {
      id: 34,
      name: "Chocolate Lava Cake",
      description: "Warm cake with molten center.",
      image:
        "https://th.bing.com/th/id/OIP.GBuylRMCNK0BE6QwPL73pQHaFo?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 4.9 },
    },
        {
      id: 35,
      name: "Pastries & Pies",
      description: "Tarts, Fruit Pies, Cream Puff.",
      image:
        "https://th.bing.com/th/id/OIP.VSHl0T_2_uMFoEy8DOEHDAHaFN?w=277&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 12.9 },
    },
        {
      id: 36,
      name: "Coconut Pudding",
      description: "Thickened with Starches.",
      image:
        "https://th.bing.com/th/id/OIP.eelWrBWDaSPXcaFR_TLE2AHaLG?w=122&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 8.9 },
    },
        {
      id: 37,
      name: "Baklava",
      description: "Layers of thin pastry with nuts and honey.",
      image:
        "https://th.bing.com/th/id/OIP.vKFzOsQDyox7ZCROV9Bq9gHaEJ?w=302&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 15.9 },
    },
        {
      id: 38,
      name: "Kunafa",
      description: "A cheese-filled pastry with shredded vermicilli and soaked in sweet syrup.",
      image:
        "https://th.bing.com/th/id/OIP.P087wY1eNQF2UDEjnkgOfwHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 20.9 },
    },
        {
      id: 39,
      name: "Rasamalai",
      description: "Sweetened malai flavored with cardamom.",
      image:
        "https://th.bing.com/th/id/OIP.gLNFZ1g8PmDm0Hb5cmaZOQHaFj?w=210&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 11.9 },
    },
  ],

  "Hot drinks": [
    {
      id: 40,
      name: "Cappuccino",
      description: "Hot coffee with milk foam.",
      image:
        "https://th.bing.com/th/id/OIP.rR3V9Lewd3SRSehvT7h2kgHaEo?w=283&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 3.5 },
    },
        {
      id: 41,
      name: "Hot Chocolate",
      description: "Hot Chocolate with cream.",
      image:
        "https://th.bing.com/th/id/OIP.UQLjKUG2XyEU9TQMksxkeQHaEJ?w=278&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 12.9 },
    },
        {
      id: 42,
      name: "Hot Apple Cider",
      description: "Spiced with cinnamon and cloves.",
      image:
        "https://th.bing.com/th/id/OIP.ZuUxmFUcGgzp1Uqx8wgItgHaE8?w=275&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 12.5 },
    },
        {
      id: 43,
      name: "Hot Lemonade",
      description: "Hot water with lemon and honey.",
      image:
        "https://th.bing.com/th/id/OIP.k6MKhcmQzL07pj6DwEqT-wHaLH?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 10.9 },
    },
        {
      id: 44,
      name: "Hot Sake",
      description: "Japanese rice wine.",
      image:
        "https://th.bing.com/th/id/OIP.DQUoOK8MWBykMO8cS07-HQHaEJ?w=323&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 15.9 },
    },
        {
      id: 45,
      name: "Herbal Tea",
      description: "Hot Tea with ginger-Honey.",
      image:
        "https://th.bing.com/th/id/OIP.aFEPtZ1FfPcPrunhLIISegHaFF?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      prices: { Regular: 5.9 },
    },
  ],

  Sauces: [
    {
      id: 46,
      name: "Garlic Mayo",
      description: "Creamy garlic dip.",
      image:
        "https://th.bing.com/th/id/OIP.7rkEsrkZkSOK-Wo_EVwlxwHaE7?w=257&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 1.0 },
    },
        {
      id: 47,
      name: "Tamota Sauce",
      description: "A thick tomato-based sauce with roux and salt.",
      image:
        "https://th.bing.com/th/id/OIP.uv2D5Hj_orN4tTk_6wDBbAHaGc?w=210&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 2.9 },
    },
        {
      id: 48,
      name: "Hollandise",
      description: "A tangy,creamy emulsion of egg yolks and melted butter.",
      image:
        "https://th.bing.com/th?q=Different+Types+of+Hollandaise+Sauce&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      prices: { Regular: 2.0 },
    },
        {
      id: 49,
      name: "Hot Sauce",
      description: "Pungent Sauces used for heat.",
      image:
        "https://th.bing.com/th/id/OIP.Ipq3AWCRqmN6U_DBe77udwHaEK?w=281&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 4.9 },
    },
        {
      id: 50,
      name: "Soy Sauce",
      description: "Fermented soybeans and grains.",
      image:
        "https://th.bing.com/th/id/OIP.LB3R3CHeEUMNKtCHyBrhRgHaE7?w=278&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 6.0 },
    },
        {
      id: 51,
      name: "pesto Sauce",
      description: "Uncooked or lightly cooked sauce.",
      image:
        "https://th.bing.com/th/id/OIP.2aL5ivPkpawCXl3-ad93rwHaLG?w=186&h=341&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      prices: { Regular: 5.5 },
    },
  ],
};

const OrderPage = () => {
  const [activeCategory, setActiveCategory] = useState("Pizzas");
  const [cart, setCart] = useState([]);
   // ✅ POPUP STATES
  const [showCustomize, setShowCustomize] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  // ✅ OPEN CUSTOMIZE POPUP
  const handleCustomize = (product, size) => {
    setSelectedProduct(product);
    setSelectedSize(size);
    setShowCustomize(true);
  };
  const addToCart = (product, size) => {
    const price = product.prices[size];
    setCart([...cart, { ...product, size, price }]);
  };
    // ✅ ADD TO CART AFTER CUSTOMIZE
  const handleAddToCart = () => {
    const price = selectedProduct.prices[selectedSize];
    setCart([...cart, { ...selectedProduct, size: selectedSize, price }]);
    setShowCustomize(false);
  };
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const deliveryFee = 2.5;
  const discount = 3;
  const total = subtotal - discount + deliveryFee;

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <div className="order-hero">
        <div className="order-hero-overlay">
          <div className="order-hero-left">
            <p className="tagline">Fresh & Hot 🔥</p>
            <h1>Tandoori Pizza London</h1>

            <div className="hero-badges">
              <span className="badge">🛒 Minimum Order: £12</span>
              <span className="badge">🚴 Delivery 20–25 Min</span>
            </div>

            <div className="open-time">
              🕒 Open until 11:00 PM
            </div>
          </div>

          <div className="rating-card">
            <h2>4.2</h2>
            <p>⭐⭐⭐⭐☆</p>
            <span>1,240 reviews</span>
          </div>
        </div>
      </div>

      {/* ================= ORDER CONTAINER ================= */}
      <div className="order-container">
        <div className="order-grid">

          {/* LEFT CATEGORY MENU */}
          <div className="menu-section">
            <h3>Menu</h3>
            {categories.map((cat) => (
              <div
                key={cat}
                className={`menu-item ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* PRODUCTS */}
          <div className="products-section">
            <h2>{activeCategory}</h2>

            {menuData[activeCategory]?.map((product) => (
              <div key={product.id} className="product-card">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <div className="size-buttons">
                    {Object.keys(product.prices).map((size) => (
                      <button
                        key={size}
                        onClick={() => addToCart(product, size)}
                      >
                        {size} £{product.prices[size]}
                      </button>
                    ))}
                  </div>
                </div>

                <img src={product.image} alt={product.name} />
              </div>
            ))}
          </div>

          {/* CART */}
          <div className="cart-section">
            <h3>My Basket</h3>

            {cart.length === 0 && <p>No items added</p>}

            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span>
                  {item.name} ({item.size})
                </span>
                <span>£{item.price.toFixed(2)}</span>
              </div>
            ))}

            <hr />

            <div>
              <div>Subtotal: £{subtotal.toFixed(2)}</div>
              <div>Discount: -£{discount}</div>
              <div>Delivery Fee: £{deliveryFee}</div>
            </div>

            <h3>Total: £{total.toFixed(2)}</h3>

            {/* ✅ OPEN DELIVERY POPUP */}
            <button
              className="checkout-btn"
              onClick={() => setShowDelivery(true)}
            >
              Checkout
            </button>
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
        {/* ================= MAP ================= */}
        <div className="map-section">
          <h3>Location</h3>
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
      {showCustomize && selectedProduct && (
        <CustomizePopup
          product={selectedProduct}
          size={selectedSize}
          onClose={() => setShowCustomize(false)}
          onAdd={handleAddToCart}
        />
      )}

      {/* ================= DELIVERY POPUP ================= */}
      {showDelivery && (
        <DeliveryPopup
          total={total}
          onClose={() => setShowDelivery(false)}
        />
      )}
    </>
  );
};

export default OrderPage;