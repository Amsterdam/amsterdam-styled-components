import { valueFromObject } from '../valueFromObject'

describe('valueFromObject', () => {
  it('should return undefined when an unnested key is not found', () => {
    const notFound = valueFromObject('foo', {})
    expect(notFound).toBeUndefined()
  })

  it('should throw when a nested key cannot be found', () => {
    expect(() => valueFromObject('foo.bar', {})).toThrow()
  })
})
