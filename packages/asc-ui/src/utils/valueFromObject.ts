/**
 * Returns a (deeply) nested value from an object
 * @example To retrieve the value for 'baz' from const obj = { foo: { bar: { baz: 'qux' }}}, call the function like so:
 * const bazValue = valueFromObject('foo.bar.baz', obj);
 * @throws {Error} whenever the requested key cannot be found
 */
// eslint-disable-next-line import/prefer-default-export
export const valueFromObject = (key: string, obj: object): any =>
  key.split('.').reduce((reduced, index) => reduced[index], obj)
