import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MenuStructure } from "../../../constants/menu";
import { matchMenu, matchMenuItemIndex } from "../../../utils/route";

type QuickNavProps = {};
export default function QuickNav({}: QuickNavProps) {
  const router = useRouter();
  const menu = matchMenu(MenuStructure, router.asPath);
  const matchIndex = menu ? matchMenuItemIndex(menu, router.asPath) : -1;
  return (
    menu && (
      <nav className="flex gap-4 text-left">
        <div className="p-4 border rounded-md flex-1">
          <p>Previous</p>
          {menu[matchIndex - 1]?.href && (
            <Link href={menu[matchIndex - 1].href!}>
              {menu[matchIndex - 1].text}
            </Link>
          )}
        </div>
        <div className="p-4 border rounded-md flex-1 text-right">
          <p>Next</p>
          {menu[matchIndex + 1]?.href && (
            <Link href={menu[matchIndex + 1].href!}>
              {menu[matchIndex + 1].text}
            </Link>
          )}
        </div>
      </nav>
    )
  );
}
