import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo/logo.svg";

function SectionA() {
  return (
    <Grid
      container
      spacing={6}
      sx={{
        backgroundColor: "#094c3b",
        color: "#fff",
        py: { xs: 1, sm: 8 },
        px: { xs: 2, sm: 4 },
        mb: { xs: 1, sm: 4 },
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}
      >
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
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ typography: { xs: "h3", sm: "h2" } }}>
          The Environment Comes First
        </Typography>
        <Typography sx={{ mt: 2 }} variant="body1">
          We actively pursue our mission by planting trees on behalf of our
          members, creating sustainable forests that not only sequester CO2 but
          also provide habitat for a variety of plant and animal species.
        </Typography>
        <Button
          sx={{
            mt: 4,
            mb: { xs: 4, sm: 0 },
            borderRadius: 0,
            backgroundColor: "#ff521a",
            color: "#fff",
          }}
          variant="contained"
          size="large"
        >
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
}

export default SectionA;
