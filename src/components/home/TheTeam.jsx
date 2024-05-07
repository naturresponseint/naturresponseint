import {
  Box,
  Card,
  Divider,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
import { team } from "../../data/home/team";
import { ArrowForward } from "@mui/icons-material";

function TheTeam() {
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
          Our Team
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

        <Grid
          container
          spacing={1.5}
          sx={{ mt: 2, px: { xs: 4, sm: 0 }, mb: 2 }}
        >
          {team?.map((item) => (
            <>
              <Grid item xs={12} sm={3} key={item.id}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 0,
                    backgroundColor: item?.color,
                    color: "#000",
                    position: "relative",
                    overflow: "hidden", // Ensures that absolute positioned elements don't overflow
                  }}
                  variant="outlined"
                >
                  <CardContent sx={{ textAlign: "start" }}>
                    <Typography variant="h6">{item?.name}</Typography>
                    <Typography variant="body1">{item?.role}</Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="400"
                    image={item?.image}
                    alt={item?.name}
                    loading="lazy"
                  />
                  <CardContent
                    sx={{
                      textAlign: "end",
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                    }}
                  >
                    {/* Position the Button at bottom-right corner */}
                    <Button variant="contained" disableElevation sx={{ borderRadius: 0, backgroundColor: "#fff" }}>
                      <ArrowForward color="success"/>
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default TheTeam;
