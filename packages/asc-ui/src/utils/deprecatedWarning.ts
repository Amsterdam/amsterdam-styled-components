/**
 * A general deprecated console warning avoided by lint
 */

export default (message: String) => {
  // eslint-disable-next-line
  console.warn(message)
}
