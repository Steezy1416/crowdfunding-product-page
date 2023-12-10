import { closeModalIcon } from "../../images";
import PledgeContainer from "./PledgeContainer";

const ModalPledgeContainer = ({
  setActivePledgeId,
  activePledgeId,
  statisticData,
  setStatisticData,
  setActiveConfirmation,
  currentPledgeData,
  setCurrentPledgeData,
}) => {
  return (
    <div className="modal-pledge-container">
      <div className="modal-pledge-header">
        <h2>Back this project</h2>
        <button className="closePledgeModalIcon" onClick={() => setActivePledgeId("")}>
          <img  alt="" src={closeModalIcon} />
        </button>
      </div>
      <p className="modal-pledge-subtext">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <PledgeContainer
        activePledgeId={activePledgeId}
        setActivePledgeId={setActivePledgeId}
        statisticData={statisticData}
        setStatisticData={setStatisticData}
        setActiveConfirmation={setActiveConfirmation}
        currentPledgeData={currentPledgeData}
        setCurrentPledgeData={setCurrentPledgeData}
      />
    </div>
  );
};

export default ModalPledgeContainer;
