import { Stack } from "@mui/material";
import React from "react";
import Hero from "../components/home/Hero";

function Home() {
  return (
    <>
      <Stack sx={{ pt: { xs: 1, sm: 2 } }}>
        {/* Hero */}
        <Hero />
      </Stack>
    </>
  );
}

export default Home;
