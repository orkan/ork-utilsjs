/*
 * This file is part of the @orkans/utilsjs package.
 * Copyright (c) 2023-2023 Orkan <orkans+utilsjs@gmail.com>
 */
import { arrPadR, jestDataSet } from '@orkans/utilsjs';

jestDataSet(
  'Right pad array',
  {
    'arr[2] -> pad[4]': {
      arr: [1, 2],
      out: [1, 2, 0, 0],
      pad: 4,
      str: 0,
    },
    'arr[2] -> pad[2]': {
      arr: [1, 2],
      out: [1, 2],
      pad: 2,
      str: 0,
    },
  },
  (data) => {
    expect(arrPadR(data.arr, data.pad, data.str)).toEqual(data.out);
  }
);

jestDataSet('My test case', { a: 'a1', b: 'b1' }, (data) => {
  expect(data).toEqual(data);
});
