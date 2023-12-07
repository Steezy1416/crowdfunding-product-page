import { useState } from "react";
import PledgeContainer from "./components/Pledges/PledgeContainer";
import StatisticsContainer from "./components/StatisticsContainer";

import "./style.css";
import { pledgeData, statistics } from "./pledgeData";
import { bookmark, mastercraftLogo } from "./images/index";
import ModalPledgeContainer from "./components/Pledges/ModalPledgeContainer";
import ConfirmationModal from "./components/ConfirmationModal";
import Header from "./components/Header";

function App() {
  const [isBookmarked, setIsBookmarked] = useState("");
  const [activePledgeId, setActivePledgeId] = useState("");

  const [statisticData, setStatisticData] = useState(statistics);
  const [activeConfirmation, setActiveConfirmation] = useState(false);
  const [currentPledgeData, setCurrentPledgeData] = useState(pledgeData)

  return (
    <div className="App">
      <Header/>
      <main>
        <div>
          <div>
            <img alt="" src={mastercraftLogo} />
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>
              A beautiful & handcrafted monitor stant to reduce neck and eye
              strain
            </p>
            <div>
              <button onClick={() => setActivePledgeId("open")}>
                Back this project
              </button>
              <button onClick={() => setIsBookmarked(!isBookmarked)}>
                <img alt="" src={bookmark} />
                {isBookmarked ? "Bookmarked" : "Bookmark"}
              </button>
            </div>
          </div>
          <StatisticsContainer statisticData={statisticData} />
          <div>
            <h2>About this project</h2>
            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>

            <p>
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>

            {activePledgeId ? (
              <ModalPledgeContainer
                activePledgeId={activePledgeId}
                setActivePledgeId={setActivePledgeId}
                statisticData={statisticData}
                setStatisticData={setStatisticData}
                setActiveConfirmation={setActiveConfirmation}
                currentPledgeData={currentPledgeData}
                setCurrentPledgeData={setCurrentPledgeData}
              />
            ) : (
              <PledgeContainer
                activePledgeId={activePledgeId}
                setActivePledgeId={setActivePledgeId}
                statisticData={statisticData}
                setStatisticData={setStatisticData}
                currentPledgeData={currentPledgeData}
                setCurrentPledgeData={setCurrentPledgeData}
              />
            )}
          </div>
        </div>
        {activeConfirmation && (
          <ConfirmationModal setActiveConfirmation={setActiveConfirmation} />
        )}
      </main>
    </div>
  );
}

export default App;
