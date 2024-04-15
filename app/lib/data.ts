export async function getShop(e?: string) {
  let reloadUrl = getSearchQuery();
  try {
    const response = await fetch(`/api/shop${e || reloadUrl}`, {
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

export function getSearchQuery() {
  let query = "";
  if (typeof window !== "undefined") {
    query = window.location.search;
  }
  return query;
}
