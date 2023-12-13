const Pledge = ({
  children,
  title,
  minPledge,
  pledgesLeft,
  setActivePledgeId,
  id,
}) => {
  return (
    <div className={pledgesLeft === 0 ? "disabledPledge pledge" : "pledge"}>
      <header>
        <h3>{title}</h3>
        <p className="pledge-tier">Pledge ${minPledge} or more</p>
      </header>
      <p>{children}</p>
      <div className="pledge-footer">
        <p className="pledges-left">
          <span className="pledges-left-highlight">{pledgesLeft}</span> left
        </p>
        <PledgeButton
          id={id}
          setActivePledgeId={setActivePledgeId}
          pledgesLeft={pledgesLeft}
        />
      </div>
    </div>
  );
};

const PledgeButton = ({ id, setActivePledgeId, pledgesLeft }) => {
  return (
    <button
      className="pledge-btn"
      onClick={() => setActivePledgeId(id)}
      disabled={pledgesLeft === 0}
    >
      {pledgesLeft === 0 ? "Out of Stock" : "Select Reward"}
    </button>
  );
};

export default Pledge;
