import * as types from "../types";

export function setFlag(boolean) {
  return {
    type: types.TEST,
    boolean
  };
}
