import pledgeData from "../../pledgeData";
import Pledge from "./Pledge";

const PledgeContainer = () => {
  return (
    <section>
      {pledgeData.map((pledge) => {
        const { title, description, minPledge, defaultPledgesAmmount, key } =
          pledge;
        return (
          <Pledge
            key={key}
            id={key}
            title={title}
            minPledge={minPledge}
            pledgesLeft={defaultPledgesAmmount}
          >
            {description}
          </Pledge>
        );
      })}
    </section>
  );
};

export default PledgeContainer;
