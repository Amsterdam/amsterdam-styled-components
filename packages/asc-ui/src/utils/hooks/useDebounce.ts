export default function useDebounce(fn: (...args: any[]) => void, wait = 100) {
  let timeout: number
  return (...args: Array<any>) => {
    clearTimeout(timeout)
    timeout = <any>setTimeout(() => {
      fn(...args)
    }, wait)
  }
}
