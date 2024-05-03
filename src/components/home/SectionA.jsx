import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo/logo.svg"

function SectionA() {
  return (
    <Grid
      container
      spacing={6}
      sx={{
        backgroundColor: "#094c3b",
        color: "#fff",
        py: { xs: 2, sm: 8 },
        px: { xs: 2, sm: 8 },
        mb: { xs: 1, sm: 4 },
      }}
    >
      <Grid item xs={12} sm={6} sx={{alignItems: "center", display: "flex", justifyContent: "end"}}>
        <Card
          sx={{
            width: { lg: "600px", sm: "100%" },
            height: { lg: "600px", sm: "100%" },
            borderRadius: 0,
            backgroundColor: "#ffe353",
          }}
        >
            <CardMedia component="img" height="100%" image={Logo} />

        </Card>
      </Grid>
      <Grid item xs={12} sm={6} sx={{display: "flex", justifyContent: "start", alignItems: "center"}}>
        <Typography sx={{ typography: { xs: "h3", sm: "h2" } }}>
            The Environment Comes First
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SectionA;
