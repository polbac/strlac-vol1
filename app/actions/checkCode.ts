"use server";

import { CODES } from "../codes";

export const checkCode = async (id: string, code: string) => {
  if (CODES.find((item) => item === `${id},${code}`)) {
    return true;
  }

  return false;
};
