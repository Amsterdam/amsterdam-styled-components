export default function createEvent(
  eventName: string,
  initOptions?: EventInit,
) {
  if (typeof Event === 'function') {
    return new Event(eventName, initOptions)
  }

  // Older browsers like Internet Explorer do not support the 'Event' constructor.
  const event = document.createEvent('Event')
  event.initEvent(eventName, initOptions?.bubbles, initOptions?.cancelable)

  return event
}
