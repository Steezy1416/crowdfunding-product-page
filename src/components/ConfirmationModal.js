import { checkIcon } from "../images";

const ConfirmationModal = ({ setActiveConfirmation }) => {
  return (
    <div className="confirmation-card">
      <img className="checkIcon" alt="" src={checkIcon} />
      <h2>Thanks for your support!</h2>
      <p className="confirmation-message">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button className="pledge-btn" onClick={() => setActiveConfirmation(false)}>Got it!</button>
    </div>
  );
};

export default ConfirmationModal;
