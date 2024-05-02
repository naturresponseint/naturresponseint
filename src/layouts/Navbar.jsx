import React, { useState } from "react";
import { siteLinks } from "../constants/Link";
import Logo from "../assets/images/logo/nri-small.svg";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Button,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = [
  { id: 1, label: "Home", link: siteLinks?.Home },
  { id: 2, label: "About us", link: siteLinks?.About },
  { id: 3, label: "Events & News", link: siteLinks?.Event },
  { id: 5, label: "Contact", link: siteLinks?.Contact },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src={Logo}
        alt="NRI logo"
        style={{ maxWidth: "100px", margin: "20px 0" }}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              component="a"
              href={item.link}
              sx={{ textAlign: "center", color: "#000" }}
            >
              {item.label}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex", marginBottom: "50px" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "#fff",
            boxShadow: 0,
            opacity: 0.9,
            borderBottom: "1px solid #d5d5d5",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" }, color: "#000" }}
              >
                <MenuIcon />
              </IconButton>
              <img
                src={Logo}
                alt="NRI logo"
                style={{
                  maxWidth: "100px",
                  marginRight: "auto",
                  display: { xs: "none", sm: "block" },
                }}
              />
            </div>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  component="a"
                  href={item?.link}
                  sx={{ color: "#000" }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            <Box>
              <Button
                variant="outlined"
                size="small"
                component="a"
                href={siteLinks?.Home}
                color="success"
              >
                Donate
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
}

export default Navbar;
