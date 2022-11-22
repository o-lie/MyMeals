import { Nullable } from "../types/util.types";

export const isNotNull = <T>(object: Nullable<T>): object is T => object != null;

export const isNull = <T>(object: Nullable<T>): object is null | undefined => object == null;

export const isString = (object: any): object is string => typeof object === "string";

export const isNumber = (object: any): object is number => typeof object === "number";

export const isEmptyString = (object: any): object is "" => typeof object === "string" && object.trim() === "";

export const isObject = (object: any): object is object => typeof object === "object";

export const isArray = (object: any): object is any[] => Array.isArray(object);