import { u128 } from "as-bignum";
import { Encoder, Decoder } from "..";

// Test
// Numbers
// Strings
// Bool
// Arrays
// ArrayViews
// Set
// Map
// Object
// Nullables

@serializable
export class Numbers {
  public u8: u8 = 1;
  public u16: u16 = 2;
  public u32: u32 = 3;
  public u64: u64 = 4;
  public u128: u128 = u128.from(5);

  public i8: i8 = -1;
  public i16: i16 = -2;
  public i32: i32 = -3;
  public i64: i64 = -4;

  public f32: f32 = 6.0;
  public f64: f64 = 7.1;
}

@serializable
export class aString {
  str: String = "";
}

@serializable
export class aBoolean {
  bool: bool = true;
}

@serializable
export class Pair {
  public s1: i32;
  public s2: i32;
}

@serializable
export class Arrays {
  public u8Arr: u8[] = [1, 2];
  public u16Arr: u16[] = [3, 4];
  public u32Arr: u32[] = [5, 6];
  public u64Arr: u64[] = [7, 8];
  public u128Arr: u128[] = [u128.from(9), u128.from(10)];

  public i8Arr: i8[] = [-1, -2];
  public i16Arr: i16[] = [-3, -4];
  public i32Arr: i32[] = [-5, -6];
  public i64Arr: i64[] = [-7, -8];

  public f32Arr: f32[] = [1, 2];
  public f64Arr: f64[] = [3.1, 4.2];

  public arrI32: Array<i32> = [0, 1];
  public arrArr: Array<Array<string>> = [[]];
  public arrUint8: Array<Uint8Array> = [];
  public arrObj: Array<Pair> = [{ s1: 0, s2: 1 }, { s1: 2, s2: 3 }];
}

@serializable
export class ArrayViews {
  public uint8array: Uint8Array = new Uint8Array(2);
  public uint16array: Uint16Array = new Uint16Array(2);
  public uint32array: Uint32Array = new Uint32Array(2);
  public uint64array: Uint64Array = new Uint64Array(2);

  public int8array: Int8Array = new Int8Array(2);
  public int16array: Int16Array = new Int16Array(2);
  public int32array: Int32Array = new Int32Array(2);
  public int64array: Int64Array = new Int64Array(2);
}

@serializable
export class MapSet {
  public map: Map<string, u32> = new Map<string, u32>();
  public set: Set<u32> = new Set<u32>();
}

@serializable
export class MixtureOne {
  public number: i32 = 2;
  public str: string = "testing";
  public arr: Array<i32> = [0, 1];
  public arpa: Array<Pair> = [
    { s1: 0, s2: 1 },
    { s1: 2, s2: 3 },
  ];
  public f32_zero: f32;
}

@serializable
export class MixtureTwo {
  foo: i32 = 0;
  bar: u32 = 1;
  u64Val: u64 = 4294967297;
  u64_zero: u64;
  i64Val: i64 = -64;
  flag: bool;
  baz: string = "";
  uint8array: Uint8Array = new Uint8Array(2);
  arr: Array<Array<string>> = [];
  u32Arr: u32[] = [];
  i32Arr: i32[] = [];
  u128Val: u128 = u128.from("128");
  uint8arrays: Array<Uint8Array> = [];
  u64Arr: u64[] = [];
}

@serializable
export class Nullables {
  u32Arr_null: u32[] | null;
  arr_null: string[] | null;
  u64_arr: Array<u64> | null;
  map_null: Map<string, string> | null;
  set_null: Set<string> | null;
  obj_null: Nested | null;
}

@serializable
export class Extends extends MixtureTwo {
  x: bool[] = [1];
}

@serializable
export class Nested {
  f: MixtureTwo = new MixtureTwo();
}

@serializable
export class MapNullValues {
  inner: Map<i32, string | null> = new Map();
}