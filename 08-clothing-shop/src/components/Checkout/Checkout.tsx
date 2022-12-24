import { useContext, useState, useEffect } from "react";
import { Product } from "../../models";
import { CheckoutCard } from "../CheckoutCard";

import { ShopContext } from "../Context/useContext";
import { Labels, PlaceOrder, PriceContainer, ProductsWrapper, Title, Total, TotalAmount, TotalAmountLabel, TotalItems, TotalItemsLabel } from "./Checkout.styled";

export const Checkout = () => {
  const { products, total, totalitems } = useContext(ShopContext);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      alert('Items are successfully ordered. Thank you for Shopping!');
      window.location.assign("/");
    }
  }, [showAlert]);

  return (
    <>
    <Title>
         { products.length > 0 ? " Items ready for checkout ": "Please Add an item to your cart first."}
    </Title>
    <ProductsWrapper>
        {products.map((product: Product, index) => (
          <CheckoutCard {...product} key={index} />
        ))}
      </ProductsWrapper>
      <Total>
      <Labels>
          <TotalAmountLabel>Total Amount:</TotalAmountLabel>
          <TotalItemsLabel>Total Items:</TotalItemsLabel>
        </Labels>
        <PriceContainer>
          <TotalAmount>${total}.00</TotalAmount>
          <TotalItems>{totalitems}</TotalItems>
        </PriceContainer>
      </Total>
      <PlaceOrder onClick={() => setShowAlert(true)}>Place Order</PlaceOrder>
    </>
  );
};