import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Users from './pages/Users'

test('Render halaman home dengan benar', async () => {
  render(<Users />)

  // mencari button tertentu
  // pastikan button kita memiliki role="button"
  // const btn = screen.getByRole('button')
  // expect(btn).toBeInTheDocument()
  // expect(btn).toHaveTextContent('Users List')

  // klik tombol Users List
  // fireEvent.click(btn)
  // mencari tomol tertentu
  // pada halaman yang muncul karena memiliki tombol
  // pastikan button kita memiliki role="button"
  const btn2 = screen.getByRole('button')
  expect(btn2).toBeInTheDocument()
  expect(btn2).toHaveTextContent('Back to Home')

  const user = await waitFor(()=>{
    return screen.findByText9('Leanne Graham')
  }, {timeout: 5000})
  expect(user).toBeInTheDocument()
})