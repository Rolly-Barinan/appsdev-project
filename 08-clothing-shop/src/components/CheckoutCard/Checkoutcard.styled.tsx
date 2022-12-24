import styled from 'styled-components';

type WrapperProps = {
    background: string;
  };



export const Wrapper = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
  margin-top: 20px;
`;

export const ImgWrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(52, 53, 99, 0.2),  0 0 1px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: 100px;
  overflow: hidden;
  position: relative;
  object-fit: cover;
  margin: 10px;
`;




export const TextContainer = styled.div`
  display: block;
  gap: 10px;
  width: 200px;
  
`;

export const Title = styled.p`
  display: flexbox;
  font-weight: bolder;
  font-style: normal;
  font-size: 35px;
  margin: 0;
  color: #bb7250;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const SubTitle = styled.p`
  font-weight: normal;
  font-size: 15px;
  color: #965b3f;
  margin: 10px;
`;


export const PriceContainer = styled.div`
  display: block;
  align-items: flex-end;
  gap: 10px;
  width: 150px;
  
`;

export const TotalAmount = styled.p`
  text-align: end;
  font-weight: bolder;
  font-style: normal;
  font-size: 25px;
  margin: 0;
  color: #bb7250;
  margin-top: 10px;
  margin-bottom: 0;
  margin-right: 20px;
`;

export const Price = styled.p`
text-align: end;
  font-weight: normal;
  font-size: 15px;
  color: #965b3f;
  margin-top: 5px;
  margin-right: 20px;
`;
