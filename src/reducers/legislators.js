import {Map} from "immutable";

export function legislators(state = new Map(), action) {
  switch (action.type) {
    case 'ADD_LEGISLATORS':
      return action.payload;
    default:
      return null;
  }
}

