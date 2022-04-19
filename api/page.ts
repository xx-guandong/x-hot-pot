import { Page } from "@prisma/client";
import { WithData } from "./../pages/api/typings";
// import fetch from "isomorphic-fetch";
const pageApi = {
  async getPages(): Promise<WithData<Page[]>> {
    const response = await fetch(`${window.location.origin}/api/hello`, {
      method: "GET",
      headers: { "Content-Type": "application-json" },
    });
    const res = await response.json();
    return res;
  },
  async getPageById({ id }: { id: number }): Promise<WithData<Page[]>> {
    const response = await fetch(`${window.location.origin}/api/page/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application-json" },
    });
    const res = await response.json();
    return res;
  },
};

export default pageApi;
