import { useState } from "react";
import pledgeData from "../../pledgeData";
import Pledge from "./Pledge";
import {ModalPledge, DefaultModalPledge} from "./ModalPledge";

const PledgeContainer = () => {
  const [activePledgeId, setActivePledgeId] = useState("");

  console.log(activePledgeId);

  return (
    <section>
      {activePledgeId ? (
        <form>
            <DefaultModalPledge
                id={"defualt"}
                title={"Pledge with no reward"}
                isActive={"defualt" === activePledgeId}
                setActivePledgeId={setActivePledgeId}
            >
                Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email
            </DefaultModalPledge>
          {pledgeData.map((pledge) => {
            const {
              title,
              description,
              minPledge,
              defaultPledgesAmmount,
              key,
            } = pledge;
            return (
              <ModalPledge
                key={key}
                id={key}
                title={title}
                minPledge={minPledge}
                pledgesLeft={defaultPledgesAmmount}
                isActive={key === activePledgeId}
                setActivePledgeId={setActivePledgeId}
              >
                {description}
              </ModalPledge>
            );
          })}
        </form>
      ) : (
        <>
          {pledgeData.map((pledge) => {
            const {
              title,
              description,
              minPledge,
              defaultPledgesAmmount,
              key,
            } = pledge;
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
        </>
      )}
    </section>
  );
};

export default PledgeContainer;