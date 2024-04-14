export const getShop = async () => {
  const response = await fetch(`http://localhost:3000/api/shop`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      cache: "no-store",
    },
  });
  const { items } = await response.json();

  return items;
};

export const getItemById = async (query: string) => {
  const response = await fetch(`http://localhost:3000/api/shop/${query}`, {
    method: "GET",
    headers: {
      cache: "no-store",
    },
  });
  const { items } = await response.json();
  return items;
};
