import { NonEmptyString } from "./types.index";
export function isNonEmpty(s: string | undefined): s is NonEmptyString {
  return !!s;
}