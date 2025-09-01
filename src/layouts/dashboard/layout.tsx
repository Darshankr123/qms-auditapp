// type Props = {
//   children: React.ReactNode;
// };

import { useBoolean } from "@/hooks/use-boolean";
import { Box } from "@mui/material";
import { Main } from "next/document";

const DashboardLayout = ({ children }: Props) => {
  const settings = useSettingsContext();

  const nav = useBoolean();

  const isHorizontal = settings.themeLayout === "horizontal";

  const isMini = settings.themeLayout === "mini";

  const renderNavMini = <NavMini />;

  const renderHorizontal = <NavHorizontal />;

  const renderNavVertical = (
    <NavVertical openNav={nav.value} onCloseNav={nav.onFalse} />
  );

  if (isHorizontal) {
    return (
      <>
        <Header onOpenNav={nav.onTrue} />

        {lgUp ? renderHorizontal : renderNavVertical}

        <Main>{children}</Main>
      </>
    );
  }

  if (isMini) {
    return (
      <>
        <Header onOpenNav={nav.onTrue} />

        <Box
          sx={{
            minHeight: 1,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {lgUp ? renderNavMini : renderNavVertical}

          <Main>{children}</Main>
        </Box>
      </>
    );
  }

  return (
    <>
      <Header onOpenNav={nav.onTrue} />
      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {renderNavVertical}

        <Main>{children}</Main>
      </Box>
    </>
  );
};
