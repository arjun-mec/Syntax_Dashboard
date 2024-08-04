import React from "react";
import OverallChart from "./OverallChart";
import BarGroupChart from "./BarGroupChart";
import "../components/GraphPage.css";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const GraphPage = ({
  data,
  setGraph,
  district,
  year,
  setState,
  setDistrict,
  setYear,
}) => {
  const handleClose = () => {
    setState(null);
    setDistrict(null);
    setYear(null);
    setGraph(false);
  };
  return (
    <div className="graph-container">
      <h1 className="graph-heading">
        {district} Prediction for {year}
      </h1>
      <OverallChart OverallCount={data["Overall"]} />
      <BarGroupChart
        Outcome={data["Outcome"]}
        ECT={data["ECT"]}
        IF={data["IF"]}
        SS={data["SS"]}
        DL={data["DL"]}
        GP={data["GP"]}
      />
      <IconButton aria-label="back" onClick={handleClose}>
        <ArrowBackIosNewIcon />
      </IconButton>
    </div>
  );
};

export default GraphPage;
