/*
 * This file is part of the @orkans/utilsjs package.
 * Copyright (c) 2023-2023 Orkan <orkans+utilsjs@gmail.com>
 */

/**
 * Right pad to desired Array {length} with {fill} values.
 */
export function arrPadR(arr, length, fill) {
  return arr.concat(Array(length - arr.length).fill(fill));
}

/**
 * Shuffle array.
 *
 * Algorithm: Fisher-Yates (aka Knuth) Shuffle
 * Visualization: http://bost.ocks.org/mike/shuffle/
 * @link https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
export function arrShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Dynamically create nested objects using object names given by an array.
 * @link // https://stackoverflow.com/questions/5484673/javascript-how-to-dynamically-create-nested-objects-using-object-names-given-by
 * Example:
 * objNested(obj, ["a", "b", "c"], ['valA', 'valB']);
 * obj = {
 *     "a": {
 *         "b": {
 *             "c": [
 *                 "valA",
 *                 "valB"
 *             ]
 *         }
 *     }
 * }
 */
export function objNested(base, names, value = null) {
  for (let i = 0; i < names.length; i++) {
    base = base[names[i]] = i == names.length - 1 ? value : {};
  }
}

/**
 * Create object with selected props only.
 */
export function objReduce(obj, keys) {
  let out = {};
  keys.forEach((key) => obj[key] && (out[key] = obj[key]));
  return out;
}