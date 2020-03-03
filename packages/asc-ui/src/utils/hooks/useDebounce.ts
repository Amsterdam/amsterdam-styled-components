export default function useDebounce(fn: Function, wait = 100) {
  let timeout: number
  return (...args: any) => {
    clearTimeout(timeout)
    timeout = window.setTimeout(() => {
      fn(args)
    }, wait)
  }
}
