import { MenuStructureType } from "../components/layout/SideNavBar/default";
import { constructHref } from "../utils/string";
export const MenuStructure: MenuStructureType[][] = [
  [
    { text: "Demo", type: "menu" },
    {
      text: "Style MDX",
      type: "item",
      href: constructHref("Demo Style MDX"),
    },
  ],
  [
    { text: "Setup Environment", type: "menu" },
    {
      text: "Setup Nextjs",
      type: "item",
      href: constructHref("Setup Nextjs"),
    },
    {
      text: "Setup Tailwind CSS",
      type: "item",
      href: constructHref("Setup Tailwind CSS"),
    },
    {
      text: "Setup MDX",
      type: "item",
      href: constructHref("Setup MDX"),
    },
    {
      text: "Setup Prisma",
      type: "item",
      href: constructHref("Setup Prisma"),
    },
  ],
];
