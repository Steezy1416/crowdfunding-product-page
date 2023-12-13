import { useState } from "react";

const ModalPledge = ({
  children,
  title,
  minPledge,
  pledgesLeft,
  isActive,
  id,
  setActivePledgeId,
  statisticData,
  setStatisticData,
  setActiveConfirmation,
  currentPledgeData,
  setCurrentPledgeData,
}) => {
  const handlePledgeChange = () => {
    setActivePledgeId(id);
  };

  const { currentPledgeAmmount, backers } = statisticData;

  const updateStatistics = (ammount, e) => {
    e.stopPropagation();
    setStatisticData({
      ...statisticData,
      currentPledgeAmmount: currentPledgeAmmount + ammount,
      backers: backers + 1,
    });
    setActivePledgeId("");
    setActiveConfirmation(true);
    const updatedData = currentPledgeData.map((pledge) => {
      if (pledge.key === id) {
        return {
          ...pledge,
          defaultPledgesAmmount: pledge.defaultPledgesAmmount - 1,
        };
      } else {
        return pledge;
      }
    });
    setCurrentPledgeData(updatedData);
  };

  return (
    <div
      className={pledgesLeft === 0 ? "disabledPledge pledge" : "pledge"}
      onClick={handlePledgeChange}
    >
      <label className="sr-only" htmlFor={title}>
        {title}
      </label>
      <header className="pledge-modal-header">
        <input
          checked={isActive && pledgesLeft > 0}
          onChange={handlePledgeChange}
          id={title}
          type="radio"
        />
        <div className="modal-pledge-subHeader">
          <h3>{title}</h3>
          <p className="pledge-tier">Pledge ${minPledge} or more</p>
          <p className="modal-pledges-left desktop-only">
            <span className="modal-pledges-left-highlight">{pledgesLeft}</span>{" "}
            left
          </p>
        </div>
      </header>
      <p>{children}</p>
      <p className="modal-pledges-left pledge-mobile-only">
        <span className="modal-pledges-left-highlight">{pledgesLeft}</span> left
      </p>
      {isActive && pledgesLeft > 0 && (
        <PledgeInput
          updateStatistics={updateStatistics}
          minPledge={minPledge}
        />
      )}
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
  setStatisticData,
  setActiveConfirmation,
}) => {
  const { currentPledgeAmmount, backers } = statisticData;

  const handlePledgeChange = () => {
    setActivePledgeId(id);
  };

  const updateStatistics = (ammount, e) => {
    e.stopPropagation();
    setStatisticData({
      ...statisticData,
      currentPledgeAmmount: currentPledgeAmmount + ammount,
      backers: backers + 1,
    });
    setActivePledgeId("");
    setActiveConfirmation(true);
  };

  return (
    <div className={"pledge"} onClick={handlePledgeChange}>
      <label className="sr-only" htmlFor={title}>
        {title}
      </label>
      <header className="pledge-modal-header">
        <input
          checked={isActive}
          onChange={handlePledgeChange}
          id={title}
          type="radio"
        />
        <div className="modal-pledge-subHeader">
          <h3>{title}</h3>
        </div>
      </header>
      <p>{children}</p>
      {isActive && (
        <PledgeInput minPledge={0} updateStatistics={updateStatistics} />
      )}
    </div>
  );
};

const PledgeInput = ({ minPledge, updateStatistics }) => {
  const [pledgeAmmount, setPledgeAmmount] = useState(minPledge);
  console.log(pledgeAmmount);
  console.log(minPledge);

  const handlePledgeSubmit = (e) => {
    e.preventDefault();
    updateStatistics(pledgeAmmount, e);
  };

  return (
    <div className="pledge-input-container">
      <p>Enter your pledge</p>
      <div className="pledge-input-action-container">
        <div className="pledge-input-outer">
          $
          <input
            className="pledge-input"
            onChange={(e) => setPledgeAmmount(parseInt(e.target.value))}
            min={minPledge}
            type="number"
            value={pledgeAmmount}
            inputMode="numeric"
          />
        </div>
        <button
          disabled={pledgeAmmount < minPledge || !pledgeAmmount}
          className="pledge-btn"
          onClick={handlePledgeSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export { ModalPledge, DefaultModalPledge };
