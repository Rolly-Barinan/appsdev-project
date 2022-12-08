import { AddButton, SubTitle,TextContainer,Title,Wrapper,} from './ProductCard.styled';

import { useState, useEffect, useContext } from 'react';
import { Product } from '../../models';
import { ClothingShopContext} from '../../useContext';

export const ProductCard = ({ name, imageUrl, price }: Product) => {
  const {products, addToCart, removeItem} = useContext(ClothingShopContext);
  const [isInCart, setIsInCart] = useState(false);
  
  useEffect(() => {
    const itemInCart = products.find((product: { name: string; }) => product.name === name);

    if (itemInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);
  
  const handleClick = () => {
    const product = {name, imageUrl, price};
    if(isInCart){
      removeItem(product);
      setIsInCart(false);
    } else{
      addToCart(product);
      setIsInCart(true);
    }
  }
  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={handleClick}>
        <p>{isInCart? "-" : "+"}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};