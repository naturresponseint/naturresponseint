import { Stack } from "@mui/material";
import React from "react";
import Hero from "../components/home/Hero";
import Header from "../components/home/Header";

function Home() {
  return (
    <>
      <Stack sx={{ pt: { xs: 1, sm: 2 } }}>
        {/* Hero */}
        <Hero />
        <Header />
      </Stack>
    </>
  );
}

export default Home;
