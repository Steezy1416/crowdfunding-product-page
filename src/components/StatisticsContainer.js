import { useState } from "react";
import { statistics } from "../pledgeData";
import { formatNumber } from "../helper";

const StatisticsContainer = () => {
  const [statisticData, setStatisticData] = useState(statistics);

  const { currentPledgeAmmount, pledgeGoal, backers, daysLeft } = statisticData;

  const goalPercentage = Math.round((currentPledgeAmmount / pledgeGoal) * 100);

  return (
    <div>
      <div>
        <p>
          <span>${formatNumber(currentPledgeAmmount)}</span> of $
          {formatNumber(pledgeGoal)} backed
        </p>
        <p>
          <span>{formatNumber(backers)}</span> total backers
        </p>
        <p>
          <span>{daysLeft}</span> days left
        </p>
      </div>

      <div className="outerProgress">
        <div
          className="innerProgress"
          style={{ width: `${goalPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StatisticsContainer;
