import { MenuStructureType } from "../components/layout/SideNavBar/default";

export function matchRoute(
  menuStructure: MenuStructureType[],
  currentPath: string
) {
  return menuStructure.some(
    (menu) => menu.href && currentPath.includes(menu.href)
  );
}

export function matchMenu(
  menuStructure: MenuStructureType[][],
  currentPath: string
) {
  return menuStructure.find((menu) => matchRoute(menu, currentPath));
}

export function matchMenuItemIndex(
  menuStructure: MenuStructureType[],
  currentPath: string
) {
  return menuStructure.findIndex(
    (menu) => menu.href && currentPath.includes(menu.href)
  );
}
