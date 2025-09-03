"use client";

// import { m } from "framer-motion";
// @mui
import { Theme, SxProps } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { MotionContainer, varBounce } from "@/components/animate";
// assets

// ----------------------------------------------------------------------

type RoleBasedGuardProp = {
  hasContent?: boolean;
  roles?: string[];
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

export default function RoleBasedGuard({
  hasContent,
  roles,
  children,
  sx,
}: RoleBasedGuardProp) {
  // Logic here to get current user role
  const { user } = useContext(AuthContext);

  // const currentRole = 'user';
  const currentRole = user?.role; // admin;

  alert(currentRole);
  if (typeof roles !== "undefined" && !roles.includes(currentRole)) {
    return hasContent ? (
      // <Container
      //   component={MotionContainer}
      //   sx={{ textAlign: "center", ...sx }}
      // >
      //   <m.div variants={varBounce().in}>
      //     <Typography variant="h6" sx={{ mb: 2 }}>
      //       Permission Denied
      //     </Typography>
      //   </m.div>

      //   <m.div variants={varBounce().in}>
      //     <Typography sx={{ color: "text.secondary" }}>
      //       You do not have permission to access this page
      //     </Typography>
      //   </m.div>

      //   <m.div variants={varBounce().in}>
      //     <ForbiddenIllustration
      //       sx={{
      //         height: 100,
      //         my: { xs: 5, sm: 10 },
      //       }}
      //     />
      //   </m.div>
      // </Container>
      <></>
    ) : null;
  }

  return <> {children} </>;
}
