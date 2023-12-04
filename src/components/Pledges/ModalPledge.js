const ModalPledge = ({
  children,
  title,
  minPledge,
  pledgesLeft,
  isActive,
  id,
  setActivePledgeId,
}) => {
  const handlePledgeChange = () => {
    setActivePledgeId(id);
  };

  return (
    <div onClick={handlePledgeChange}>
      <label className="sr-only" htmlFor={title}>
        {title}
      </label>
      <header>
        <input
          checked={isActive}
          onChange={handlePledgeChange}
          id={title}
          type="radio"
        />
        <div>
          <h3>{title}</h3>
          <p>Pledge ${minPledge} or more</p>
          <span>{pledgesLeft}</span> left
        </div>
      </header>
      <p>{children}</p>
      <p>
        <span>{pledgesLeft}</span> left
      </p>
      {isActive && <PledgeInput minPledge={minPledge} />}
    </div>
  );
};

const DefaultModalPledge = ({
  title,
  id,
  setActivePledgeId,
  isActive,
  children,
}) => {

  const handlePledgeChange = () => {
    setActivePledgeId(id);
  };

  return (
    <div onClick={handlePledgeChange}>
      <label className="sr-only" htmlFor={title}>
        {title}
      </label>
      <header>
        <input
          checked={isActive}
          onChange={handlePledgeChange}
          id={title}
          type="radio"
        />
        <div>
          <h3>{title}</h3>
        </div>
      </header>
      <p>{children}</p>
      {isActive && <PledgeInput minPledge={0} />}
    </div>
  );
};

const PledgeInput = ({ minPledge }) => {
  return (
    <div>
      <p>Enter your pledge</p>
      <div>
        $
        <input min={minPledge} type="number" defaultValue={minPledge} />
        <button>Continue</button>
      </div>
    </div>
  );
};

export { ModalPledge, DefaultModalPledge };
