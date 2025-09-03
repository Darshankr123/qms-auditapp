"use client";

import { AuthContext } from "@/auth/context/auth-context";
import { useContext } from "react";
import { useNavData } from "./config-navigation";
import { Box, Stack } from "@mui/material";
import { NAV } from "../config-layout";
import { NavToggleButton } from "../_common/nav-toggle-button";
import { hideScroll } from "@/theme/css";
import Logo from "@/components/logo";
import NavSectionMini from "@/components/nav-section/mini/nav-section-mini";

const NavMin = () => {
  const { user } = useContext(AuthContext);

  const navData = useNavData();

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_MINI },
      }}
    >
      <NavToggleButton
        sx={{
          top: 22,
          left: NAV.W_MINI - 12,
        }}
      />

      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: "fixed",
          width: NAV.W_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScroll.x,
        }}
      >
        <Logo sx={{ mx: "auto", my: 2 }} />

        <NavSectionMini
          data={navData}
          config={{
            permissions: user,
          }}
        />
      </Stack>
    </Box>
  );
};

export default NavMin;
