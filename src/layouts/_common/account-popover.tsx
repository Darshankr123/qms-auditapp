"use client";

import { m, AnimatePresence } from "framer-motion";

// @mui
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/auth/context/auth-context";
import { useAuthContext } from "@/sections/auth/hooks/use-auth-context";
import { paths } from "@/routes/paths";
import { varHover } from "@/components/animate";
import CustomPopover, { usePopover } from "@/components/custom-popover";
import { useSnackbar } from "notistack";
// routes
// import { useRouter } from 'src/routes/hooks';
// auth
// import { useAuthContext } from 'src/auth/hooks';
// components
// import { varHover } from 'src/components/animate';
// import { useSnackbar } from 'src/components/snackbar';
// import CustomPopover, { usePopover } from 'src/components/custom-popover';
// import { AuthContext } from 'src/auth/context';
// import { paths } from 'src/routes/paths';
// ----------------------------------------------------------------------

export default function AccountPopover() {
  const router = useRouter();

  const { user } = useContext(AuthContext);

  const { logout } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const popover = usePopover();

  const handleLogout = async () => {
    try {
      await logout();
      popover.onClose();
      router.replace("/");
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Unable to logout!", { variant: "error" });
    }
  };

  const handleChangePassword = async () => {
    // const href = paths.dashboard.change_password
    // router.push(href);
    popover.onClose();
  };

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(popover.open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src={user?.photoURL}
          alt={user?.user_name}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        />
      </IconButton>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        sx={{ width: 200, p: 0 }}
      >
        <Box sx={{ p: 2, pb: 1.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.user_name}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.mobile_number}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.user_email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem
          onClick={handleChangePassword}
          sx={{ m: 1, fontWeight: "fontWeightBold", color: "primary.main" }}
        >
          Change Password
        </MenuItem>

        <MenuItem
          onClick={handleLogout}
          sx={{ m: 1, fontWeight: "fontWeightBold", color: "error.main" }}
        >
          Logout
        </MenuItem>
      </CustomPopover>
    </>
  );
}
