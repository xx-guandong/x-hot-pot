import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Arrow from "../../../icons/Arrow";
import { MenuStructure } from "../../../constants/menu";
import { matchRoute } from "../../../utils/route";
import { MenuOpenState, MenuRoot } from "../../menu";
import Menu from "../../menu/Menu";
import MenuItem from "../../menu/MenuItem";
import { Page } from "@prisma/client";

type SideNavBarProps = {};

function Search() {
  return (
    <div className="h-12">
      <div className="flex flex-row bg-white p-2">
        <div>
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="24px"
            height="24px"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
          </svg>
        </div>
        <input
          type={"text"}
          className="w-full p-0 pl-1 border-none focus:outline-none focus:ring-0"
          placeholder="Quick Search"
        ></input>
      </div>
    </div>
  );
}

function SideBarMenu({ text, isMatch }: { text: string; isMatch: boolean }) {
  return (
    <Menu className="flex cursor-pointer">
      {({ open }) => {
        const classname = !open
          ? "transition-transform h-7"
          : "transition-transform rotate-90 h-7";

        return (
          <>
            <Arrow className={classname} />
            <span className={isMatch ? "text-lg font-bold" : "text-lg"}>
              {text}
            </span>
          </>
        );
      }}
    </Menu>
  );
}

function SideBarMenuItem({ text, href }: { text: string; href: string }) {
  const router = useRouter();
  const isActive = router.asPath.includes(href);
  return (
    <MenuItem className="pl-6 border-l-2 cursor-pointer ">
      {({ open }) => {
        return open ? (
          <Link passHref href={href}>
            <li className="text-slate-400 py-1">
              <span
                className={
                  isActive
                    ? "text-black font-medium"
                    : " text-slate-500 hover:text-black"
                }
              >
                {text}
              </span>
            </li>
          </Link>
        ) : null;
      }}
    </MenuItem>
  );
}

export type MenuStructureType = {
  text: string;
  type: "menu" | "item";
  href?: string;
  /**
   * page id, should match database
   */
  id?: number;
};

export default function SideNavBar({}: SideNavBarProps) {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col sticky top-0 h-screen">
        <aside className="w-64 bg-slate-100 border-r h-full p-4 flex flex-col gap-2">
          {/* <Search /> */}
          {MenuStructure.map((layer, idx) => {
            const hasMatchRoute = matchRoute(layer, router.asPath);
            return (
              <MenuRoot
                key={idx}
                open={hasMatchRoute ? MenuOpenState.Open : MenuOpenState.Closed}
              >
                {layer.map((menu) => {
                  if (menu.type === "item") {
                    return (
                      <SideBarMenuItem
                        key={menu.text}
                        text={menu.text}
                        href={menu.href!}
                      />
                    );
                  }
                  return (
                    <SideBarMenu
                      key={menu.text}
                      text={menu.text}
                      isMatch={hasMatchRoute}
                    />
                  );
                })}
              </MenuRoot>
            );
          })}
        </aside>
      </div>
    </div>
  );
}
