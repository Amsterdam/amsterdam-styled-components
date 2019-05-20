import fromTheme, { fromProps, valueFromObject } from '../fromTheme'

describe('valueFromObject', () => {
  it('should return undefined when an unnested key is not found', () => {
    const notFound = valueFromObject('foo', {})
    expect(notFound).toBeUndefined()
  })

  it('should throw when a nested key cannot be found', () => {
    expect(() => valueFromObject('foo.bar', {})).toThrow()
  })
})

describe('fromProps', () => {
  it('should return a value from props object', () => {
    expect(fromProps('foo')({ foo: 'bar' })).toBe('bar')
    expect(fromProps('foo')({ foo: 'bar' })).not.toBe('baz')
    expect(fromProps('foo.bar.baz')({ foo: { bar: { baz: 'qux' } } })).toBe(
      'qux',
    )
    expect(fromProps('value', (value: number) => value * 2)({ value: 1 })).toBe(
      2,
    )
    expect(fromProps('foo')()).toBeUndefined()
  })

  it('should not throw when a nested key cannot be found', () => {
    expect(() => fromProps('foo')).not.toThrow()
    expect(() => fromProps('foo')()).not.toThrow()
    expect(() => fromProps('foo.bar')()).not.toThrow()
  })
})

describe('fromTheme', () => {
  const theme = {
    colours: { white: '#fff' },
    units: 'px',
    size: 1,
  }

  it('should return a value from the theme object', () => {
    expect(fromTheme('colours.white')({ theme })).toBe(theme.colours.white)
    expect(fromTheme('units')({ theme })).toBe(theme.units)
    expect(fromTheme('size', (value: number) => value * 2)({ theme })).toBe(
      theme.size * 2,
    )
  })

  it('should not throw when a nested key cannot be found', () => {
    expect(() => fromTheme('colours.white.light')({ theme })).not.toThrow()
  })
})
