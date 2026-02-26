import { useState } from "react";
import "../styles/Popup.css";

const DeliveryPopup = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [postcode, setPostcode] = useState("");

  return (
    <div className="popup-overlay">
      <div className="popup-card">

        {/* CLOSE */}
        <button className="close-btn" onClick={onClose}>✖</button>

        {/* STEP 1 – ENTER POSTCODE */}
        {step === 1 && (
          <>
            <h2>Please Enter Your Post Code</h2>
            <input
              type="text"
              placeholder="Enter postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
            <button onClick={() => setStep(2)}>Find</button>
          </>
        )}

        {/* STEP 2 – DELIVERY OR COLLECTION */}
        {step === 2 && (
          <>
            <h2>Order Now</h2>
            <button onClick={() => setStep(3)}>Deliver my order</button>
            <button onClick={() => setStep(3)}>I will come & Collect</button>
          </>
        )}

        {/* STEP 3 – SUCCESS */}
        {step === 3 && (
          <>
            <h2>You're All Set!</h2>
            <p>Postcode Submitted: {postcode}</p>
            <button onClick={onClose}>Continue</button>
          </>
        )}

      </div>
    </div>
  );
};

export default DeliveryPopup;