import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('Render halaman home dengan benar', () => {
  render(<App />)

  // mencari text tertentu
  const title = screen.getByText(/why do we need test ?/i)
  expect(title).toBeInTheDocument()

  // mencari button tertentu
  // pastikan button kita memiliki role="button"
  const btn = screen.getByRole('button')
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveTextContent('Users List')

  // klik tombol Users List
  fireEvent.click(btn)
  // mencari tomol tertentu
  // pada halaman yang muncul karena memiliki tombol
  // pastikan button kita memiliki role="button"
  // const btn2 = screen.getByRole('button')
  // expect(btn2).toBeInTheDocument()
  // expect(btn2).toHaveTextContent('Back to Home')
})