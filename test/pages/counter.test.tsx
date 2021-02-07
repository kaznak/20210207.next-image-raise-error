import { screen, render, fireEvent, act } from '@testing-library/react'
import { Counter } from '../../pages/counter'

describe('Counter', () => {
  it('Initial Value is 0', () => {
    render(<Counter />)
    expect(screen.getByText('0', { selector: 'p' }))
  })

  it('Pressing `+` button increments the counter.', async () => {
    render(<Counter />)
    expect(screen.getByText('0', { selector: 'p' }))
    await act(async () => {
      fireEvent.click(screen.getByText('+', { selector: 'button' }))
    })
    expect(screen.getByText('1', { selector: 'p' }))
  })
})
