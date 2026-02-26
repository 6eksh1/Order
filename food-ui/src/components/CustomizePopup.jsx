import { useState } from "react";
import "../styles/Popup.css";

const CustomizePopup = ({ onClose }) => {
  const [step, setStep] = useState(1);

  return (
    <div className="popup-overlay">
      <div className="popup-card large">

        <button className="close-btn" onClick={onClose}>✖</button>

        {/* STEP 1 – SELECT PIZZA */}
        {step === 1 && (
          <>
            <h2>Please select your pizza</h2>
            <button onClick={() => setStep(2)}>Margherita</button>
            <button onClick={() => setStep(2)}>Hawaiian</button>
          </>
        )}

        {/* STEP 2 – CUSTOMIZE */}
        {step === 2 && (
          <>
            <h2>Customize your pizza</h2>

            <h4>Vegetable Toppings</h4>
            <label><input type="checkbox" /> Cheese</label>
            <label><input type="checkbox" /> Onions</label>
            <label><input type="checkbox" /> Jalapenos</label>

            <button onClick={() => setStep(3)}>Next Step</button>
          </>
        )}

        {/* STEP 3 – SPECIAL REQUEST */}
        {step === 3 && (
          <>
            <h2>Add your special request</h2>
            <textarea placeholder="Write here..." />
            <button onClick={onClose}>Add to Order</button>
          </>
        )}

      </div>
    </div>
  );
};

export default CustomizePopup;