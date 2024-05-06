import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import { galleryItems } from "../../data/home/gallery";

function GalleryGoals() {
  return (
    <>
      <Grid
        container
        spacing={6}
        sx={{
          backgroundColor: "#094c3b",
          color: "#fff",
          pt: { xs: 1, sm: 3 },
          pb: { xs: 1, sm: 3 },
          px: { xs: 2, sm: 8 },
          mb: { xs: 1, sm: 4 },
          mt: { xs: 1, sm: 4 },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography sx={{ typography: { xs: "h3", sm: "h2" } }}>
            Inaanza na mimi
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, textAlign: "start" }}>
            We believe in working together in ensuring that we create a good
            ecosystem for all living and resources our beautiful Earth has
            enabled us to enjoy.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <ImageList variant="masonry" cols={2} gap={2}>
            {galleryItems.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </>
  );
}

export default GalleryGoals;
