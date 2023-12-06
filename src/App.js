import { useState } from "react";
import PledgeContainer from "./components/Pledges/PledgeContainer";
import StatisticsContainer from "./components/StatisticsContainer";

import "./style.css";
import { statistics } from "./pledgeData";

function App() {
  const [isBookmarked, setIsBookmarked] = useState("");
  const [activePledgeId, setActivePledgeId] = useState("");

  const [statisticData, setStatisticData] = useState(statistics);

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <div>
          <div>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>
              A beautiful & handcrafted monitor stant to reduce neck and eye
              strain
            </p>
            <div>
              <button onClick={() => setActivePledgeId("open")}>Back this project</button>
              <button onClick={() => setIsBookmarked(!isBookmarked)}>
                {isBookmarked ? "Bookmarked" : "Bookmark"}
              </button>
            </div>
          </div>
          <StatisticsContainer statisticData={statisticData} />
          <PledgeContainer
            activePledgeId={activePledgeId}
            setActivePledgeId={setActivePledgeId}
            statisticData={statisticData}
            setStatisticData={setStatisticData}

          />
        </div>
      </main>
    </div>
  );
}

export default App;
