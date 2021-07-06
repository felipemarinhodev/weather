import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Loading from '.'

describe('<Loading />', () => {
  it('should render the loading component correctly', () => {
    renderWithTheme(<Loading />)
    expect(
      screen.getByRole('heading', { name: /carregando/i })
    ).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /carregando/i })).toHaveStyle({
      color: '#FFC900'
    })
  })
})
