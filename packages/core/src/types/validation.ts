// Type validation utilities

// Runtime type checking utilities
export const isString = (value: unknown): value is string => typeof value === 'string';
export const isNumber = (value: unknown): value is number => typeof value === 'number' && !isNaN(value);
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
export const isFunction = (value: unknown): value is Function => typeof value === 'function';
export const isObject = (value: unknown): value is Record<string, unknown> => 
  value !== null && typeof value === 'object' && !Array.isArray(value);
export const isArray = (value: unknown): value is unknown[] => Array.isArray(value);
export const isNull = (value: unknown): value is null => value === null;
export const isUndefined = (value: unknown): value is undefined => value === undefined;
export const isNullish = (value: unknown): value is null | undefined => value == null;

// Component prop validation
export const validateSize = (size: unknown): size is 'small' | 'medium' | 'large' => 
  isString(size) && ['small', 'medium', 'large'].includes(size);

export const validateStatus = (status: unknown): status is 'error' | 'warning' | 'success' | 'info' => 
  isString(status) && ['error', 'warning', 'success', 'info'].includes(status);

export const validateVariant = (variant: unknown): variant is 'primary' | 'secondary' | 'default' | 'ghost' | 'outline' => 
  isString(variant) && ['primary', 'secondary', 'default', 'ghost', 'outline'].includes(variant);

// Theme validation
export const validateColorScheme = (scheme: unknown): scheme is 'light' | 'dark' | 'auto' => 
  isString(scheme) && ['light', 'dark', 'auto'].includes(scheme);

export const validateBreakpoint = (breakpoint: unknown): breakpoint is 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' => 
  isString(breakpoint) && ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(breakpoint);

// Generic validation helpers
export const createEnumValidator = <T extends string>(validValues: readonly T[]) => 
  (value: unknown): value is T => isString(value) && validValues.includes(value as T);

export const createArrayValidator = <T>(itemValidator: (item: unknown) => item is T) => 
  (value: unknown): value is T[] => isArray(value) && value.every(itemValidator);

export const createObjectValidator = <T extends Record<string, unknown>>(
  schema: { [K in keyof T]: (value: unknown) => value is T[K] }
) => (value: unknown): value is T => {
  if (!isObject(value)) return false;
  return Object.entries(schema).every(([key, validator]) => validator(value[key]));
};

// Assertion functions for development
export const assertIsString = (value: unknown, name = 'value'): asserts value is string => {
  if (!isString(value)) {
    throw new TypeError(`Expected ${name} to be a string, got ${typeof value}`);
  }
};

export const assertIsNumber = (value: unknown, name = 'value'): asserts value is number => {
  if (!isNumber(value)) {
    throw new TypeError(`Expected ${name} to be a number, got ${typeof value}`);
  }
};

export const assertIsBoolean = (value: unknown, name = 'value'): asserts value is boolean => {
  if (!isBoolean(value)) {
    throw new TypeError(`Expected ${name} to be a boolean, got ${typeof value}`);
  }
};

export const assertIsFunction = (value: unknown, name = 'value'): asserts value is Function => {
  if (!isFunction(value)) {
    throw new TypeError(`Expected ${name} to be a function, got ${typeof value}`);
  }
};

export const assertIsObject = (value: unknown, name = 'value'): asserts value is Record<string, unknown> => {
  if (!isObject(value)) {
    throw new TypeError(`Expected ${name} to be an object, got ${typeof value}`);
  }
};

export const assertIsArray = (value: unknown, name = 'value'): asserts value is unknown[] => {
  if (!isArray(value)) {
    throw new TypeError(`Expected ${name} to be an array, got ${typeof value}`);
  }
};