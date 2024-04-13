export const getShop = async () => {
  const response = await fetch(`${process.env.VERCEL_URL}/api/shop`);
  console.log(response.status);
};
