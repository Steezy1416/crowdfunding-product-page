import { formatNumber } from "../helper";

const StatisticsContainer = ({ statisticData }) => {
  const { currentPledgeAmmount, pledgeGoal, backers, daysLeft } = statisticData;

  const goalPercentage = Math.round((currentPledgeAmmount / pledgeGoal) * 100);

  return (
    <div className="content-card">
      <div className="statistic-container">
        <p className="statistic">
          <span className="statistic-highlight">${formatNumber(currentPledgeAmmount)}</span> of $
          {formatNumber(pledgeGoal)} backed
        </p>
        <p className="statistic">
          <span className="statistic-highlight">{formatNumber(backers)}</span> total backers
        </p>
        <p className="statistic">
          <span className="statistic-highlight">{daysLeft}</span> days left
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
