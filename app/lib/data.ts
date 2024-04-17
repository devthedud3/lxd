import { getSearchQuery } from "./utils";

export async function ShopAPI(e?: string) {
  try {
    const response = await fetch(`/api/${e || getSearchQuery()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cache: "no-store",
      },
    });
    const { items } = await response.json();

    return items;
  } catch (e) {
    return Response.json({ message: e }, { status: 500 });
  }
}
