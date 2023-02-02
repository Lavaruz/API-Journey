import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import { UserData } from "./data/Data";
import Revenue from "./data/Revenue";

function App() {
  const revenue = Revenue() || [];
  let barConfig = {
    labels: revenue.map((data) => data.name),
    datasets: [
      {
        label: "Movie Revenue",
        data: revenue.map((data, index) => {
          return +data.revenue.replace("$", "");
        }),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  };

  const [userData, setUserData] = useState(barConfig);

  useEffect(() => {
    setUserData(barConfig);
  }, [revenue]);

  return (
    <div className="App">
      <div className="barChart">
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
