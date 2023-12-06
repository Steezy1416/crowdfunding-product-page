import { useRef, useState } from "react";

const ModalPledge = ({
  children,
  title,
  minPledge,
  pledgesLeft,
  isActive,
  id,
  setActivePledgeId,
  statisticData,
  setStatisticData
}) => {
  const handlePledgeChange = () => {
    setActivePledgeId(id);
  };

  const {currentPledgeAmmount, backers} = statisticData

  const updateStatistics = (ammount) => {
    setStatisticData({
      ...statisticData,
      currentPledgeAmmount: currentPledgeAmmount + ammount,
      backers: backers +  1
    })
  }

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
      {isActive && <PledgeInput updateStatistics={updateStatistics} minPledge={minPledge} />}
    </div>
  );
};

const DefaultModalPledge = ({
  title,
  id,
  setActivePledgeId,
  isActive,
  children,
  statisticData,
  setStatisticData
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

const PledgeInput = ({ minPledge, updateStatistics }) => {

  const [pledgeAmmount, setPledgeAmmount] = useState(minPledge)


  const handlePledgeSubmit = (e) => {
    e.preventDefault()
    updateStatistics(pledgeAmmount)
  }

  return (
    <div>
      <p>Enter your pledge</p>
      <div>
        $
        <input onChange={(e) => setPledgeAmmount(e.target.value)} min={minPledge} type="number" value={pledgeAmmount} />
        <button onClick={handlePledgeSubmit}>Continue</button>
      </div>
    </div>
  );
};

export { ModalPledge, DefaultModalPledge };
