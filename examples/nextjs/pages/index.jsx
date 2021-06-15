import { Close } from '@amsterdam/asc-assets'
import { Button, Header, Typography } from '@amsterdam/asc-ui'
import React from 'react'

export default function Home() {
  return (
    <>
      <Header
        tall
        title="Data en informatie"
        homeLink="http://data.amsterdam.nl"
        fullWidth={false}
        navigation={
          <Typography as="span">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            debitis, dicta incidunt maxime necessitatibus voluptatibus.
          </Typography>
        }
      />
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
