import { Box } from "@mui/material";
import TypingAnim from "../components/typer/TypingAnim";

const Home = () => {
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box>
          <TypingAnim />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            gap: 5,
            my: 5,
          }}
        >
          <img
            src="robott.png"
            alt="robot"
            style={{ width: "100px", margin: "auto" }}
          />
          <img
            className="image-inverted rotate"
            src="openai.png"
            alt="openai"
            style={{ width: "100px", height: "100px", margin: "auto" }}
          />
        </Box>
        <Box sx={{ display: "flex", width: "100%", mx: "auto" }}>
          <img
            src="chat.png"
            alt="chat"
            style={{
              display: "flex",
              margin: "auto",
              width: "80%",
              borderRadius: "20",
              boxShadow: "-5px -5px 105px #64f3d5",
              marginTop: 20,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
