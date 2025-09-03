import { Stack } from "@mui/material";
import { memo } from "react";
import { NavConfigProps, NavListProps, NavSectionProps } from "../types";
import { navMiniConfig } from "../config";
import NavList from "./nav-list";

const NavSectionMini = ({ data, config, sx, ...other }: NavSectionProps) => {
  return (
    <Stack sx={sx} {...other}>
      {data.map((group, index) => (
        <Group
          key={group.subheader || index}
          items={group.items}
          config={navMiniConfig(config)}
        />
      ))}
    </Stack>
  );
};

export default memo(NavSectionMini);

type GroupProps = {
  items: NavListProps[];
  config: NavConfigProps;
};

function Group({ items, config }: GroupProps) {
  const permissions = config.permissions;

  return (
    <>
      {items.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={1}
          id={list.id}
          hasChild={!!list.children}
          config={config}
        />
      ))}
    </>
  );
}
