"use client";

import { useContext, useEffect } from "react";
// @mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
// hooks
// import { useResponsive } from 'src/hooks/use-responsive';
// components
// import Logo from 'src/components/logo';
// import Scrollbar from 'src/components/scrollbar';
// import { usePathname } from 'src/routes/hooks';
// import { NavSectionVertical } from 'src/components/nav-section';
//
// import { AuthContext } from 'src/auth/context';
import { NAV } from "../config-layout";
import { useNavData } from "./config-navigation";
import { AuthContext } from "@/auth/context/auth-context";
import { usePathname } from "next/navigation";
import { useResponsive } from "@/hooks/useResponsive";
import Logo from "@/components/logo";
import NavSectionVertical from "@/components/nav-section/vertical/nav-section-vertical";
import { NavToggleButton } from "../_common/nav-toggle-button";
import Scrollbar from "@/components/scrollbar";
import NavUpgrade from "../_common/nav-upgrade";
// import { NavToggleButton, NavUpgrade } from '../_common';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const { user } = useContext(AuthContext);

  const pathname = usePathname();

  const lgUp = useResponsive("up", "lg");

  const navData = useNavData();

  // console.log(`nav data : ${navData}`);

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Logo sx={{ mt: 3, ml: 4, mb: 1 }} />
      <NavSectionVertical
        data={navData}
        config={{
          permissions: user,
        }}
      />

      <Box sx={{ flexGrow: 1 }} />

      {/* <NavUpgrade /> */}
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_VERTICAL },
      }}
    >
      <NavToggleButton />

      {lgUp ? (
        <Stack
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.W_VERTICAL,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Stack>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.W_VERTICAL,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
