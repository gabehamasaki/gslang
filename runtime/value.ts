export type ValueType = "null" | "number" | "boolean";

export interface RuntimeVal {
  type: ValueType;
}

export interface NullVal extends RuntimeVal {
  type: "null";
  value: "null";
}

export interface NumberVal extends RuntimeVal {
  type: "number";
  value: number;
}

export interface BooleanVal extends RuntimeVal {
  type: "boolean";
  value: boolean
}

export function RV_NULL() {
  return { value: 'null', type: 'null' } as NullVal
}

export function RV_NUMBER(n = 0) {
  return { value: n, type: 'number' } as NumberVal
}

export function RV_BOOL(b = true) {
  return { value: b, type: 'boolean' } as BooleanVal
}
