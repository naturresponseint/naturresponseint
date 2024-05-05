import { Box, Divider, Typography } from "@mui/material";
import React from "react";

function Objectives() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          py: { sm: 8, xs: 2 },
          px: { sm: 6, xs: 2 },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            typography: { xs: "h3", sm: "h1" },
            mb: 1,
            mt: { sm: 3, xs: 1 },
            fontWeight: "900",
          }}
        >
          Our Objectives
        </Typography>
        <Divider
          sx={{
            mb: 3,
            width: "300px",
            mx: "auto",
            borderWidth: "3px",
            borderColor: "#094c3b",
          }}
        />
      </Box>
    </>
  );
}

export default Objectives;
