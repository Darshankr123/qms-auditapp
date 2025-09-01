import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useResponsive } from "@/hooks/useResponsive";
import LogoFull from "@/components/logo-full/LogogFull";

type Props = {
  title?: string;
  image?: string;
  children: React.ReactNode;
};

export default function AuthClassicLayout({ children, image, title }: Props) {
  const theme = useTheme();

  const upMd = useResponsive("up", "md");

  const renderLogo = (
    <LogoFull
      sx={{
        zIndex: 9,
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "10rem",
        height: "10rem",
        // m: { xs: 4, md: 5 },
      }}
    />
  );

  const renderContent = (
    <Stack
      sx={{
        width: 1,
        mx: "auto",
        maxWidth: 360,
        px: { xs: 2, md: 8 },
        // py: { xs: 2, md: 4 },
        mt: 10,
        flexGrow: 1,
        justifyContent: "center",
      }}
    >
      {children}
    </Stack>
  );

  // const renderSection = (
  //   <Stack
  //     flexGrow={1}
  //     alignItems="center"
  //     justifyContent="center"
  //     spacing={10}
  //     sx={{
  //       ...bgGradient({
  //         color: alpha(
  //           theme.palette.background.default,
  //           theme.palette.mode === "light" ? 0.88 : 0.94
  //         ),
  //         imgUrl: "/assets/background/overlay_2.png",
  //       }),
  //     }}
  //   >
  //     {/* <Typography varient="h3" sx={{ maxWidth: 480, textAlign: "center" }}>
  //       {title || "Welcome"}
  //     </Typography> */}

  //     <Box
  //       component="img"
  //       alt="auth"
  //       src={image || "/assets/illustrations/illustration_dashboard.png"}
  //       sx={{ maxWidth: 720 }}
  //     />
  //     <Typography variant="caption" component="div">
  //       <Typography>
  //         <a href="">Terms & condtions</a>
  //         <a href="">Privacy Policy</a>
  //       </Typography>
  //       © All rights reserved by{" "}
  //       <Typography component="span" sx={{ color: "primary.main" }}>
  //         Akshayakalpa
  //       </Typography>
  //     </Typography>
  //   </Stack>
  // );

  return (
    <Stack
      component="main"
      direction="row"
      sx={{
        minHeight: "90vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {renderLogo}
      {/* {upMd && renderSection} */}
      {renderContent}
    </Stack>
  );
}
