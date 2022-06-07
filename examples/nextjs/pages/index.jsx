import { Close } from '@amsterdam/asc-assets'
import { Button } from '@amsterdam/asc-ui'
import React from 'react'

export default function Home() {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('Hello from JS world!')
        }}
      >
        A normal html button with an onclick event, click me!
      </button>
      <Button variant="primary" iconLeft={<Close />}>
        Hello
      </Button>
    </>
  )
}
