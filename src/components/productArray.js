export const productsArray = [
  {
    id: process.env.REACT_APP_STRIPE_MOJITO_LARGE_PRICE_ID,
    title: "Mojito 8oz",
    price: 20,
  },
  {
    id: process.env.REACT_APP_STRIPE_MOJITO_NORMAL_PRICE_ID,
    title: "Mojito 6oz",
    price: 15,
  },
  {
    id: process.env.REACT_APP_STRIPE_WAVEY_NORMAL_PRICE_ID,
    title: "Wavey 6oz",
    price: 15,
  },
  {
    id: process.env.REACT_APP_STRIPE_WAVEY_LARGE_PRICE_ID,
    title: "Wavey 8oz",
    price: 20,
  },
  {
    id: process.env.REACT_APP_STRIPE_LIMITED_EDITION_NORMAL_PRICE_ID,
    title: "Limited Edition 6oz",
    price: 15,
  },
  {
    id: process.env.REACT_APP_STRIPE_LIMITED_EDITION_LARGE_PRICE_ID,
    title: "Limited Edition 8oz",
    price: 20,
  },
  {
    id: process.env.REACT_APP_STRIPE_BLACK_RASPBERRY_NORMAL_PRICE_ID,
    title: "Black Raspberry 6oz",
    price: 15,
  },
  {
    id: process.env.REACT_APP_STRIPE_BLACK_RASPBERRY_LARGE_PRICE_ID,
    title: "Black Raspberry 8oz",
    price: 20,
  },
];

export function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID " + id);
    return undefined;
  }

  return productData;
}
