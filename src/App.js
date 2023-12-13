import { useState } from "react";
import PledgeContainer from "./components/Pledges/PledgeContainer";
import StatisticsContainer from "./components/StatisticsContainer";

import "./style.css";
import { pledgeData, statistics } from "./pledgeData";
import { mastercraftLogo } from "./images/index";
import ModalPledgeContainer from "./components/Pledges/ModalPledgeContainer";
import ConfirmationModal from "./components/ConfirmationModal";
import Header from "./components/Header";

function App() {
  const [isBookmarked, setIsBookmarked] = useState("");
  const [activePledgeId, setActivePledgeId] = useState("");

  const [statisticData, setStatisticData] = useState(statistics);
  const [activeConfirmation, setActiveConfirmation] = useState(false);
  const [currentPledgeData, setCurrentPledgeData] = useState(pledgeData);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="content-container">
          <div className="content-card">
            <img className="mastercraftLogo" alt="" src={mastercraftLogo} />
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>
              A beautiful & handcrafted monitor stant to reduce neck and eye
              strain
            </p>
            <div className="btn-container">
              <button
                className="pledge-btn grow"
                onClick={() => setActivePledgeId("open")}
              >
                Back this project
              </button>
              <button
                className="bookmark-btn"
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <circle
                      fill={isBookmarked ? "#52b788" : "#2F2F2F"}
                      cx="28"
                      cy="28"
                      r="28"
                    />
                    <path fill="#ffffff" d="M23 19v18l5-5.058L33 37V19z" />
                  </g>
                </svg>

                {isBookmarked ? "Bookmarked" : "Bookmark"}
              </button>
            </div>
          </div>
          <StatisticsContainer statisticData={statisticData} />
          <div className="content-card">
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

            <PledgeContainer
              activePledgeId={activePledgeId}
              setActivePledgeId={setActivePledgeId}
              statisticData={statisticData}
              setStatisticData={setStatisticData}
              currentPledgeData={currentPledgeData}
              setCurrentPledgeData={setCurrentPledgeData}
            />
          </div>
        </div>
      </main>
      {activePledgeId && (
        <div className="pledge-modal-container">
          <div
            onClick={() => setActivePledgeId("")}
            className="pledge-modal-overlay"
          />
          <ModalPledgeContainer
            activePledgeId={activePledgeId}
            setActivePledgeId={setActivePledgeId}
            statisticData={statisticData}
            setStatisticData={setStatisticData}
            setActiveConfirmation={setActiveConfirmation}
            currentPledgeData={currentPledgeData}
            setCurrentPledgeData={setCurrentPledgeData}
          />
        </div>
      )}
      {activeConfirmation && (
        <div className="confirmation-modal-container">
          <div
            onClick={() => setActiveConfirmation(false)}
            className="confirmation-overlay"
          ></div>
          <ConfirmationModal setActiveConfirmation={setActiveConfirmation} />
        </div>
      )}
    </div>
  );
}

export default App;
