import { ModalPledge, DefaultModalPledge } from "./ModalPledge";

const ActiveModalPledgeContainer = ({
  activePledgeId,
  setActiveConfirmation,
  setActivePledgeId,
  statisticData,
  setStatisticData,
  currentPledgeData,
  setCurrentPledgeData,
}) => {
  return (
    <div className="pledge-container">
      <form>
        <DefaultModalPledge
          id={"defualt"}
          title={"Pledge with no reward"}
          isActive={"defualt" === activePledgeId}
          setActivePledgeId={setActivePledgeId}
          statisticData={statisticData}
          setStatisticData={setStatisticData}
          setActiveConfirmation={setActiveConfirmation}
        >
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email
        </DefaultModalPledge>
        {currentPledgeData.map((pledge) => {
          const { title, description, minPledge, defaultPledgesAmmount, key } =
            pledge;
          return (
            <ModalPledge
              key={key}
              id={key}
              title={title}
              minPledge={minPledge}
              pledgesLeft={defaultPledgesAmmount}
              isActive={key === activePledgeId}
              setActivePledgeId={setActivePledgeId}
              statisticData={statisticData}
              setStatisticData={setStatisticData}
              setActiveConfirmation={setActiveConfirmation}
              currentPledgeData={currentPledgeData}
              setCurrentPledgeData={setCurrentPledgeData}
            >
              {description}
            </ModalPledge>
          );
        })}
      </form>
    </div>
  );
};

export default ActiveModalPledgeContainer
