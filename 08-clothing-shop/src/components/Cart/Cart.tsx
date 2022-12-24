import { useContext, useState } from "react";
import { ShopContext } from "../Context/useContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title,ProductsWrap } from "./Cart.styled";
import { Quantity } from "../QuantityField";

export const Cart = () => {
  const { products, total } = useContext(ShopContext);

  return (
    <>
      <Title>Your cart total is ${total}.00</Title>
      <ProductsWrapper>
        {products.map((product: Product, index) => (
          <ProductsWrap><ProductCard {...product} key={index} />
          <br></br>
          <Quantity {...product} key={index}></Quantity>
          </ProductsWrap>
        ))}
      
      </ProductsWrapper>
    </>
  );
};