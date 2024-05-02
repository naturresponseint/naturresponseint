import { VolunteerActivism } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
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
            py: { xs: 2, sm: 6 },
            px: { xs: 2, sm: 6 },
            backgroundColor: "#ffe353",
          }}
        >
          <Box>
            <VolunteerActivism sx={{ fontSize: "50px", mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Donate Today
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={9} sx={{ backgroundColor: "#094c3b" }}></Grid>
      </Grid>
    </>
  );
}

export default Hero;
