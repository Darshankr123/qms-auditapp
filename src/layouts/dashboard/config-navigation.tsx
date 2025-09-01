import { paths } from "@/routes/paths";
import { useMemo } from "react";

export function useNavData() {
  const data = useMemo(
    () => [
      {
        subheader: "Home",
        items: [
          {
            id: "dashboard",
            title: "Dashboard",
            path: paths.dashboard.root,
          },
        ],
      },
    ],
    []
  );

  return data;
}
