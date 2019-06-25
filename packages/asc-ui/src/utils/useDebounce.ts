export default function useDebounce(fn: Function, wait = 100) {
  let timeout: any = null
  return (...args: any) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args)
    }, wait)
  }
}
