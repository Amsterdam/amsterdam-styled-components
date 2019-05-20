/**
 * Returns a (deeply) nested value from an object
 * @example To retrieve the value for 'baz' from const obj = { foo: { bar: { baz: 'qux' }}}, call the function like so:
 * const bazValue = valueFromObject('foo.bar.baz', obj);
 * @throws {Error} whenever the requested key cannot be found
 */
const valueFromObject = (key: string, obj: object): any =>
  key.split('.').reduce((reduced, index) => reduced[index], obj)

/**
 * A higher-order function that gets a value from the given object. Designed to work with `styled-components`
 */
const fromProps = (identifier: string, callback?: Function): any => (
  source: object = {},
) => {
  try {
    const value = valueFromObject(identifier, source)
    return callback ? callback(value) : value
  } catch (e) {
    // will throw an error when a nested property doesn't exist
    // for instance branding.colours.primary.light where 'light' is not present
    return undefined
  }
}

/**
 * A shortcut to the `fromProps` that will get a value out of the props.theme object
 */
const fromTheme = (identifier: string, callback?: Function): any => ({
  theme,
}: {
  theme: object
}) => fromProps(identifier, callback)(theme)

export { fromTheme as default, fromProps, valueFromObject }
