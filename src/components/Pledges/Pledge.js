const Pledge = ({
  children,
  title,
  minPledge,
  pledgesLeft,
  setActivePledgeId,
  id,
}) => {
  return (
    <div>
      <header>
        <h3>{title}</h3>
        <p>Pledge ${minPledge} or more</p>
      </header>
      <p>{children}</p>
      <p>
        <span>{pledgesLeft}</span> left
      </p>
      <PledgeButton
        id={id}
        setActivePledgeId={setActivePledgeId}
        pledgesLeft={pledgesLeft}
      />
    </div>
  );
};

const PledgeButton = ({ id, setActivePledgeId, pledgesLeft }) => {
  return (
    <button onClick={() => setActivePledgeId(id)} disabled={pledgesLeft === 0}>
      {pledgesLeft === 0 ? "Out of Stock" : "Select Reward"}
    </button>
  );
};

export default Pledge;
