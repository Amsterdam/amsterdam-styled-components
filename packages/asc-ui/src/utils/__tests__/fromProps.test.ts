import { fromProps } from '../fromProps'

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
