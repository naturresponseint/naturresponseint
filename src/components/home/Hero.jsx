import {
  ArrowForward,
  Handshake,
  VolunteerActivism,
} from "@mui/icons-material";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid
          item
          xs={false}
          sm={3}
          sx={{
            display: { xs: "none", sm: "flex" },
            maxWidth: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: { xs: 2, sm: 8 },
            px: { xs: 2, sm: 4 },
            backgroundColor: "#ffe353",
          }}
        >
          <Box sx={{ mb: 4 }}>
            <VolunteerActivism sx={{ fontSize: "50px", mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Donate Today
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Your donation will help plant and maintain a seedling and a tree.
              Help us create a greener world
            </Typography>
            <Button sx={{ p: 0 }}>
              Get Started <ArrowForward />
            </Button>
          </Box>

          <Divider sx={{ width: "100%", color: "#000", mb: 2 }} />

          <Box sx={{ mb: 4 }}>
            <Handshake sx={{ fontSize: "50px", mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Join Us
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Volunteer today and join us in creating a greener world for our
              generation
            </Typography>
            <Button sx={{ p: 0 }}>
              Get Started <ArrowForward />
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={9} sx={{ backgroundColor: "#094c3b" }}></Grid>
      </Grid>
    </>
  );
}

export default Hero;
