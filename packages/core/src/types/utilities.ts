// Utility types for common patterns

// Make specific properties optional
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Make specific properties required
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// Extract function parameters
export type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

// Extract function return type
export type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

// Create a union of all values in an object
export type ValueOf<T> = T[keyof T];

// Create a union of all keys in an object as strings
export type KeysOf<T> = Extract<keyof T, string>;

// Deep partial type
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Deep required type
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

// Flatten nested object types
export type Flatten<T> = T extends object ? { [K in keyof T]: Flatten<T[K]> } : T;

// Create a type that excludes null and undefined
export type NonNullable<T> = T extends null | undefined ? never : T;

// Create a type that only includes string keys
export type StringKeys<T> = Extract<keyof T, string>;

// Create a type that only includes number keys
export type NumberKeys<T> = Extract<keyof T, number>;

// Create a type that only includes symbol keys
export type SymbolKeys<T> = Extract<keyof T, symbol>;

// Create a type for CSS properties
export type CSSProperties = React.CSSProperties;

// Create a type for HTML attributes
export type HTMLAttributes<T = HTMLElement> = React.HTMLAttributes<T>;

// Create a type for component refs
export type ComponentRef<T> = React.Ref<T>;

// Create a type for forwarded refs
export type ForwardedRef<T> = React.ForwardedRef<T>;

// Create a type for component with forwarded ref
export type ComponentWithRef<T, P = {}> = React.ForwardRefExoticComponent<P & React.RefAttributes<T>>;

// Create a type for polymorphic components
export type PolymorphicComponentProps<T extends React.ElementType, P = {}> = P & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof P | 'as'>;

// Create a type for polymorphic components with ref
export type PolymorphicComponentPropsWithRef<T extends React.ElementType, P = {}> = PolymorphicComponentProps<T, P> & {
  ref?: React.ComponentPropsWithRef<T>['ref'];
};

// Create a type for render props
export type RenderProp<T> = (props: T) => React.ReactNode;

// Create a type for children as render prop
export type ChildrenRenderProp<T> = React.ReactNode | RenderProp<T>;

// Create a type for event handlers
export type EventHandler<T = Event> = (event: T) => void;

// Create a type for async event handlers
export type AsyncEventHandler<T = Event> = (event: T) => Promise<void>;

// Create a type for callback functions
export type Callback<T = void> = () => T;

// Create a type for async callback functions
export type AsyncCallback<T = void> = () => Promise<T>;

// Create a type for value change handlers
export type ChangeHandler<T> = (value: T) => void;

// Create a type for async value change handlers
export type AsyncChangeHandler<T> = (value: T) => Promise<void>;

// Create a type for validation functions
export type Validator<T> = (value: T) => boolean | string | Promise<boolean | string>;

// Create a type for transform functions
export type Transform<T, U> = (value: T) => U;

// Create a type for async transform functions
export type AsyncTransform<T, U> = (value: T) => Promise<U>;

// Create a type for predicate functions
export type Predicate<T> = (value: T) => boolean;

// Create a type for async predicate functions
export type AsyncPredicate<T> = (value: T) => Promise<boolean>;

// Create a type for comparison functions
export type Comparator<T> = (a: T, b: T) => number;

// Create a type for equality functions
export type EqualityFn<T> = (a: T, b: T) => boolean;

// Create a type for memoization keys
export type MemoKey = string | number | symbol;

// Create a type for cache implementations
export interface Cache<K, V> {
  get(key: K): V | undefined;
  set(key: K, value: V): void;
  has(key: K): boolean;
  delete(key: K): boolean;
  clear(): void;
}

// Create a type for debounced functions
export type DebouncedFunction<T extends (...args: any[]) => any> = {
  (...args: Parameters<T>): void;
  cancel(): void;
  flush(): ReturnType<T> | undefined;
};

// Create a type for throttled functions
export type ThrottledFunction<T extends (...args: any[]) => any> = {
  (...args: Parameters<T>): ReturnType<T> | undefined;
  cancel(): void;
  flush(): ReturnType<T> | undefined;
};

// Create a type for observable values
export interface Observable<T> {
  subscribe(observer: (value: T) => void): () => void;
  getValue(): T;
}

// Create a type for disposable resources
export interface Disposable {
  dispose(): void;
}

// Create a type for async disposable resources
export interface AsyncDisposable {
  dispose(): Promise<void>;
}