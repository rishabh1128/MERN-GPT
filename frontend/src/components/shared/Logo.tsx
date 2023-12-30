import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
          src="openai.png"
          alt="openai"
          width={"50px"}
          height={"50px"}
          className="image-inverted"
        />
      </Link>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Typography
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            mr: "auto",
            fontWeight: "800",
            textShadow: "2px 2px 20px #000",
            fontSize: "30px",
          }}
        >
          <span style={{ fontSize: "40px" }}>MERN</span>-GPT
        </Typography>
      </Link>
    </div>
  );
};

export default Logo;
