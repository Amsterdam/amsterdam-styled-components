/**
 * Returns a (deeply) nested value from an object
 * @example To retrieve the value for 'baz' from const obj = { foo: { bar: { baz: 'qux' }}}, call the function like so:
 * const bazValue = valueFromObject('foo.bar.baz', obj);
 * @throws {Error} whenever the requested key cannot be found
 */
import type { Theme } from '../types'

// eslint-disable-next-line import/prefer-default-export
export const valueFromObject = <T = Theme.ThemeInterface>(
  key: string,
  obj: T,
): any => key.split('.').reduce((reduced, index) => reduced[index], obj)
