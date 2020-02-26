import React from 'react'
import Spinner from './Spinner'

export default {
  title: 'Atoms/Spinner',
}

export const Default = () => <Spinner />

export const WithMaximalSize100px = () => <Spinner size={100} />

export const WithThemeColor = () => <Spinner color="secondary" size={100} />
