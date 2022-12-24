import { useContext } from "react";
import { ShopContext } from "../Context/useContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title } from "./Wishlist.styled";

export const Wishlist = () => {
  const { saved } = useContext(ShopContext);
  return (
    <>
      <Title>You have {saved.length} {saved.length > 1 ? "items" : "item"} in your wish list</Title>
      <ProductsWrapper>
        {saved.map((product: Product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};
