import { valueFromObject } from './valueFromObject'

/**
 * A higher-order function that gets a value from the given object. Designed to work with `styled-components`
 */
// eslint-disable-next-line import/prefer-default-export
export const fromProps =
  <T>(identifier: string, callback?: (value: any) => void): any =>
  (source: T) => {
    try {
      const value = valueFromObject<T>(identifier, source)
      return callback ? callback(value) : value
    } catch (e) {
      // will throw an error when a nested property doesn't exist
      // for instance branding.colours.primary.light where 'light' is not present
      return undefined
    }
  }
