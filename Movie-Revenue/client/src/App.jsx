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
      },
    ],
  };

  const [userData, setUserData] = useState(barConfig);

  useEffect(() => {
    setUserData(barConfig);
  }, [revenue]);

  return <div className="App">{<BarChart chartData={userData} />}</div>;
}

export default App;
