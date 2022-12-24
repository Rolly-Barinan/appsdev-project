import { Product } from "../../models/Product";

export enum ShopActionType {
    ADD = 'add',
    REMOVE = 'remove',
    UPDATE = 'update',
    SAVED = 'save',
    ERASE = 'erase',
    UPDATETOT = 'addQtty',
    UPDATEITEMS = 'totalItems'
  }
  
  export type ShopAction = {
    type: ShopActionType;
    payload: any;
  };
  
  export const add = (product: Product): ShopAction => ({
    type: ShopActionType.ADD,
    payload: product,
  });
  
  export const remove = (product: Product): ShopAction => ({
    type: ShopActionType.REMOVE,
    payload: product,
  });

  export const update = (total: number): ShopAction => ({
    type: ShopActionType.UPDATE,
    payload: total,
  });

  export const save = (product: Product): ShopAction => ({
    type: ShopActionType.SAVED,
    payload: product,
  });
  
  export const erase = (product: Product): ShopAction => ({
    type: ShopActionType.ERASE,
    payload: product,
  });


  export const addQtty = (priceProd: number): ShopAction => ({
    type: ShopActionType.UPDATETOT,
    payload: priceProd,
  });
  export const totalItems = (totalitems: number): ShopAction => ({
    type: ShopActionType.UPDATEITEMS,
    payload: totalitems,
  });

 