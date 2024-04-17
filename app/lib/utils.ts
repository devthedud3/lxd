export function getSearchQuery() {
  if (typeof window !== "undefined") {
    const { pathname, search } = window.location;
    return pathname + search;
  }
  return "";
}

export async function GetPathHistory() {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
}
