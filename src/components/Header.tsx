import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#00fffc"
                to="/chat"
                text="Go TO Chat"
                textcolor="black"
              />
              <NavigationLink
                bg="#51538f"
                textcolor="white"
                to="/"
                text="logout"
                onclick={auth?.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#00fffc"
                textcolor="black"
                to="/login"
                text="Login"
              />
              <NavigationLink
                bg="#51538f"
                textcolor="white"
                to="/signup"
                text="signup"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
