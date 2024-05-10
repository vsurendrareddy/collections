import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Typography } from "@mui/material";

const pages = [
  "Materials",
  "Elements",
  "Project",
  "Manufactures",
  "Collections",
];
const settings = ["Profile"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [selectedTab, setSelectedTab] = React.useState("");


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", height: "69px" }}>
      <Container maxWidth="xl" sx={{ color: "black" }}>
        <Toolbar disableGutters>
          <AcUnitIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#8c66e0",
            }}
          />

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleTabClick(page)}
                sx={{
                  my: 2,
                  color: page === selectedTab ? "#8c66e0" : "black",
                  display: "block",
                  padding: "12px 12px 14px 12px",
                  boxShadow: page === selectedTab ? "10px #8c66e0" : "none",
                  backgroundColor: page === selectedTab ? "#ece6fa " : "white",
                  borderRadius: "14px",
                  gap: "3px",
                 
                  "&:hover": {
                    backgroundColor: page === selectedTab ? "#ece6fa" : "white",
                    color: "#8c66e0",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" color="inherit">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
