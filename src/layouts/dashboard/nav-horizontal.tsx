"use client";

import { AuthContext } from "@/auth/context/auth-context";
import { useTheme } from "@emotion/react";
import { memo, useContext } from "react";
import { useNavData } from "./config-navigation";
import { AppBar, Toolbar } from "@mui/material";
import { HEADER } from "../config-layout";
import { bgBlur } from "@/theme/css";
import NavSectionHorizontal from "@/components/nav-section/horizontal/nav-section-horizontal";
import HeaderShadow from "../_common/header-shadow";

const NavHorizontal = () => {
  const theme = useTheme();

  const { user } = useContext(AuthContext);

  const navData = useNavData();

  return (
    <AppBar
      component="nav"
      sx={{
        top: HEADER.H_DESKTOP_OFFSET,
      }}
    >
      <Toolbar
        sx={{
          ...bgBlur({
            // color:theme.palete.background.default
          }),
        }}
      >
        <NavSectionHorizontal
          data={navData}
          config={{
            permissions: user,
          }}
        />
      </Toolbar>
      <HeaderShadow />
    </AppBar>
  );
};

export default memo(NavHorizontal);
