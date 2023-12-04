import { useState } from "react";

const Pledge = ({ children, title, minPledge, pledgesLeft }) => {

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
    <PledgeButton pledgesLeft={pledgesLeft}/>
    </div>
  );
};

const PledgeButton = ({pledgesLeft}) => {
    return (
        <button disabled={pledgesLeft === 0}>
            {pledgesLeft === 0 ? "Out of Stock" : "Select Reward"}
        </button>
    )
}

export default Pledge;
