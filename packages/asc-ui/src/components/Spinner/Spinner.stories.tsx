import React from 'react'
import { themeColor } from '../../utils'
import Spinner from './Spinner'

export default {
  title: 'Experimental/Atoms/Spinner',
}

export const Default = () => <Spinner />

export const WithMaximalSize100px = () => <Spinner size={100} />

export const WithColor = () => <Spinner color="#00ff00" size={100} />

export const WithThemeColor = () => (
  <Spinner color={themeColor('secondary')} size={100} />
)
