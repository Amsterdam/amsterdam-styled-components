export default function useDebounce(fn: Function, wait = 100) {
  let timeout: number
  return (...args: Array<any>) => {
    clearTimeout(timeout)
    timeout = <any>setTimeout(() => {
      fn(...args)
    }, wait)
  }
}
