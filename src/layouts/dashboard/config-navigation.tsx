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
      {
        subheader: "Organisation",
        items: [
          {
            id: "Organisation",
            title: "Organisation",
            path: paths.dashboard.orgs.organisation,
          },
        ],
      },
      {
        subheader: "Privillages",
        items: [
          {
            id: "Privillages",
            title: "Privillages",
            path: paths.dashboard.previllages.previllages,
          },
        ],
      },
      {
        subheader: "roles",
        items: [
          {
            id: "Role",
            title: "Roles",
            path: paths.dashboard.roles.roles,
          },
          {
            id: "User",
            title: "User",
            path: paths.dashboard.roles.user,
          },
        ],
      },
      {
        subheader: "Audits",
        items: [
          {
            id: "Audits",
            title: "Audit",
            path: paths.dashboard.audits.audit,
          },
        ],
      },
      {
        subheader: "Central Repository",
        items: [
          {
            id: "Central Repository",
            title: "Central Repository",
            path: paths.dashboard.CentralRepository.centralRepository,
          },
        ],
      },
    ],
    []
  );

  return data;
}
