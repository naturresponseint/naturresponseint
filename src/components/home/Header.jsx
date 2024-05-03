/* eslint-disable no-unused-vars */
import { Card, CardMedia, Paper, Typography, Box, Grid, Divider } from "@mui/material";
import React from "react";
import heroImage from "../../assets/images/backgrounds/nri3light.png";
import { headerData } from "../../data/home/header";

function Header() {
  return (
    <>
      <Box
        sx={{ textAlign: "center", py: { sm: 8, xs: 2 }, px: { sm: 6, xs: 2 } }}
      >
        <Typography
          sx={{
            textAlign: "center",
            typography: { xs: "h3", sm: "h1" },
            mb: 1,
            mt: {sm: 3, xs: 1},
            fontWeight: "900",
          }}
        >
          Planting Trees for Good
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

        <Card
          sx={{
            width: "100%",
            height: { lg: "700px", sm: "100%" },
            borderRadius: 0,
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            sx={{ objectFit: "cover" }}
            image={`${heroImage}`}
            alt="Paella dish"
          />
        </Card>

        <Grid
          container
          spacing={2}
          sx={{ textAlign: "center", mt: { sm: 4 }, mb: { sm: 4 } }}
        >
          {headerData?.map((item) => (
            <>
              <Grid item xs={12} sm={4} key={item.id}>
                <Paper elevation={0}>
                  <Typography variant="h2">{item?.tally}</Typography>
                  <Typography variant="body1" sx={{ textAlign: "center" }}>
                    {item?.content}
                  </Typography>
                </Paper>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Header;
