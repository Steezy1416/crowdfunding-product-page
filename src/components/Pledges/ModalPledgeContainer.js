import { closeModalIcon } from "../../images"
import { ModalPledge } from "./ModalPledge"
import PledgeContainer from "./PledgeContainer"

const ModalPledgeContainer = ({setActivePledgeId, activePledgeId, statisticData, setStatisticData}) => {
    return (
        <div>
            <div>
                <h2>Back this project</h2>
                <button onClick={() => setActivePledgeId("")}>
                    <img alt="" src={closeModalIcon}/>
                </button>
            </div>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            <PledgeContainer
                activePledgeId={activePledgeId}
                setActivePledgeId={setActivePledgeId}
                statisticData={statisticData}
                setStatisticData={setStatisticData}
              />
        </div>

    )
}

export default ModalPledgeContainer