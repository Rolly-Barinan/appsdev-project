import { ShopAction, ShopActionType } from './action';
import { ShopState } from "./state";

export const shopReducer = (state: ShopState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionType.ADD:
      return {
        ...state,
        products: action.payload,
      };
    case ShopActionType.REMOVE:
      return {
        ...state,
        products: action.payload,
      };

    case ShopActionType.UPDATE:
      return {
        ...state,
        total:  action.payload,
      };

      case ShopActionType.SAVED:
        return {
          ...state,
          saved: action.payload,
        };
        case ShopActionType.ERASE:
          return {
            ...state,
            saved: action.payload,
          };

          case ShopActionType.UPDATETOT:
            return {
              ...state,
              products: action.payload,
            };
            case ShopActionType.UPDATEITEMS:
            return {
              ...state,
              totalitems: action.payload,
            };                     
    default:
      return state;
  }
};
