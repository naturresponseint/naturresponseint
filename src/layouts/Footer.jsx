/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/images/logo/nri-article.svg";
import {
  Box,
  Grid,
  List,
  ListItem,
  Typography,
  CssBaseline,
  ListItemButton,
  Divider,
} from "@mui/material";
import {
  footerEvents,
  footerLinks,
  footerPartners,
} from "../data/footer/footerData";

function Footer() {
  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          backgroundColor: "#094c3b",
          padding: "40px 20px",
          color: "#fff",
        }}
      >
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={3}>
            {/* <div>
              <img src={logo} alt="NRI" />
            </div> */}
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Natur Response International
            </Typography>
            <Typography variant="caption" sx={{ mt: 2 }}>
              Creating a greener world for our generation and the next
            </Typography>
          </Grid>

          <Grid item xs={12} lg={3}>
            <div>
              <Typography variant="h6" component="h6">
                Links
              </Typography>
              <Divider />
              <List>
                {footerLinks?.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton
                      component="a"
                      //   href={item.link}
                      sx={{ textAlign: "center" }}
                    >
                      {item.label}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>

          <Grid item xs={12} lg={3}>
            <div>
              <Typography variant="h6" component="h6">
                Partners
              </Typography>
              <Divider />
              <List>
                {footerPartners?.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton
                      component="a"
                      //   href={item.link}
                      sx={{ textAlign: "center" }}
                    >
                      {item.label}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>

          <Grid item xs={12} lg={3}>
            <div>
              <Typography variant="h6" component="h6">
                Events & News
              </Typography>
              <Divider />
              <List>
                {footerEvents?.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton
                      component="a"
                      //   href={item.link}
                      sx={{ textAlign: "center" }}
                    >
                      {item.label}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
        </Grid>

        <Divider />

        <Typography sx={{ textAlign: "center", mt: 2 }}>© 2024 Natur Response. All rights reserved.</Typography>
      </Box>
    </>
  );
}

export default Footer;
