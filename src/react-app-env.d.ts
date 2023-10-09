/// <reference types="react-scripts" />

type JSXChildren = string | JSX.Element | JSX.Element[] | (() => JSX.Element);

type JSXProps = {
  children?: JSXChildren;
}

type AllBoolean<T> = {
  [K in keyof T]?: T[K] extends Array<infer U> ? AllBoolean<U>[] : boolean
}
