// import { createRef } from 'react'
// import { render, fireEvent } from '@testing-library/react'
// import Toggle from './Toggle'
// import { ThemeProvider } from '../../theme'

// describe('Switch', () => {
//   it('should toggle checked / not checked', () => {
//     const onChangeMock = jest.fn()
//     const { container } = render(
//       <ThemeProvider>
//         <Toggle id="id" onChange={onChangeMock} />
//       </ThemeProvider>,
//     )

// const input = container.querySelector('input')

// expect(input?.checked).toEqual(false)

// // Toggle on
// if (input) {
//   fireEvent.click(input)
// }

// expect(input?.checked).toEqual(true)

// // Toggle off
// if (input) {
//   fireEvent.click(input)
// }

// expect(input?.checked).toEqual(false)
//   })

//   it('should handle refs', () => {
//     const ref = createRef<HTMLInputElement>()

//     render(
//       <ThemeProvider>
//         <Toggle id="id" ref={ref} />
//       </ThemeProvider>,
//     )

//     expect(ref.current).toBeInstanceOf(HTMLInputElement)
//     expect(ref.current?.type).toEqual('checkbox')
//   })
// })
