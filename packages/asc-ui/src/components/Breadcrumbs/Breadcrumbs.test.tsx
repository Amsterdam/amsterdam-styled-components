import { render } from '@testing-library/react'
import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import BreadcrumbsItem from './BreadcrumbsItem/BreadcrumbsItem'

describe('Breadcrumbs', () => {
  it('should render', () => {
    const { container, queryByText } = render(
      <Breadcrumbs>
        <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
        <BreadcrumbsItem href="/innovatie">Innovatie</BreadcrumbsItem>
        <BreadcrumbsItem href="/innovatie/bouwprojecten">
          Bouw- en verkkeersprojecten
        </BreadcrumbsItem>
        <BreadcrumbsItem href="/innovatie/bouwprojecten/contact">
          Contact
        </BreadcrumbsItem>
      </Breadcrumbs>,
    )

    expect(container.firstChild).toBeDefined()

    expect(queryByText('Home')).toBeInTheDocument()
    expect(queryByText('Innovatie')).toBeInTheDocument()
    expect(queryByText('Bouw- en verkkeersprojecten')).toBeInTheDocument()
    expect(queryByText('Contact')).toBeInTheDocument()
  })
})
