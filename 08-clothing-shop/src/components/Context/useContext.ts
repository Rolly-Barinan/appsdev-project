import { createContext } from "react";
import { ShopState, initialState } from '../Reducer';

export const ShopContext = createContext<ShopState>(initialState);