import { createContext } from "react";
import { ShopState, initialState } from '../useReducer';

export const ClothingShopContext = createContext<ShopState>(initialState);