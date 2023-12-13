import Pledge from "./Pledge";

const PledgeContainer = ({ setActivePledgeId, currentPledgeData }) => {
  return (
    <section className="pledge-container">
      {currentPledgeData.map((pledge) => {
        const { title, description, minPledge, defaultPledgesAmmount, key } =
          pledge;
        return (
          <Pledge
            key={key}
            id={key}
            title={title}
            minPledge={minPledge}
            pledgesLeft={defaultPledgesAmmount}
            setActivePledgeId={setActivePledgeId}
          >
            {description}
          </Pledge>
        );
      })}
    </section>
  );
};

export default PledgeContainer;
