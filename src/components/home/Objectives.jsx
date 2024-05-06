import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { objectiveSection } from "../../data/home/objectives";
import { ArrowForward } from "@mui/icons-material";

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

        <Grid container spacing={1.5} sx={{ mt: 2, px: { xs: 4, sm: 0 } }}>
          {objectiveSection?.map((item) => (
            <>
              <Grid item xs={12} sm={3} key={item.id}>
                <Card
                  sx={{ height: "100%", borderRadius: 0 }}
                  variant="outlined"
                >
                  <CardMedia component="img" height="194" image={item?.image} />

                  <CardContent sx={{ textAlign: "start" }}>
                    <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                      {item?.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      display="block"
                      gutterBottom
                      sx={{ mb: 2 }}
                    >
                      {item?.description}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ textAlign: "start", px: 1 }}>
                    <Button
                      variant="outlined"
                      endIcon={<ArrowForward />}
                      sx={{ borderRadius: 0 }}
                      size="small"
                    >
                      Discover
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Objectives;
