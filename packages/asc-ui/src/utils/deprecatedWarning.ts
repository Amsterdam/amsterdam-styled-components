/**
 * A general deprecated console warning avoided by lint
 */

export default (message: string) => {
  // eslint-disable-next-line
  console.warn(message)
}
