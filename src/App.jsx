import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "./components/Card";
import "../src/App.css";
import GraphPage from "./components/GraphPage";
import Loader from "./components/Loader";
import GraphImages from "./components/GraphImages";

const App = () => {
  const [graph, setGraph] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState(null);
  const [district, setDistrict] = useState(null);
  const [year, setYear] = useState(null);
  const [graphData, setGraphData] = useState("");

  const handleSubmit = () => {
    setIsLoading(true);

    const requestBody = {
      state: state,
      district: district,
      year: parseInt(year),
    };

    // Make the POST request with the body
    fetch("https://syntax.koyeb.app/predict/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGraphData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
        setGraph(true);
      });
  };

  return (
    <div className="main-body">
      <Grid container disableEqualOverflow sx={{ flex: 1, overflow: "auto" }}>
        <Grid xs={12} sm={5} sx={{ overflow: "hidden" }}>
          <div className="card-container">
            {graph ? (
              <GraphPage
                data={graphData}
                setGraph={setGraph}
                district={district}
                year={year}
                setState={setState}
                setDistrict={setDistrict}
                setYear={setYear}
              />
            ) : isLoading ? (
              <Loader />
            ) : (
              <Card
                state={state}
                setState={setState}
                district={district}
                setDistrict={setDistrict}
                year={year}
                setYear={setYear}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
        </Grid>
        <Grid xs={12} sm={7} sx={{ overflow: "hidden" }}>
          <div className="image-column">
            <GraphImages />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
