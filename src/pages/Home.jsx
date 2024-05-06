import { Stack } from "@mui/material";
import React from "react";
import Hero from "../components/home/Hero";
import Header from "../components/home/Header";
import SectionA from "../components/home/SectionA";
import Objectives from "../components/home/Objectives";
import GalleryGoals from "../components/home/GalleryGoals";

function Home() {
  return (
    <>
      <Stack sx={{ pt: { xs: 1, sm: 2 }, backgroundColor: "#fffdf1" }}>
        <Hero />
        <Header />
        <SectionA />
        <Objectives />
        <GalleryGoals />
      </Stack>
    </>
  );
}

export default Home;
