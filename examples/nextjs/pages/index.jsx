import React from 'react'
import { Close } from '@datapunt/asc-assets'
import { Header, Button, Typography } from '@datapunt/asc-ui'

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
