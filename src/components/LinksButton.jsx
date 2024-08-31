import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import Button from "@mui/material/Button";

const LinksButton = () => {
  const handleClick = () => {
    window.open("https://linktr.ee/syntax_ibm", "_blank");
  };

  return (
    <div>
      <Button startIcon={<LinkIcon />} size="small" onClick={handleClick}>
        Learn More
      </Button>
    </div>
  );
};

export default LinksButton;
