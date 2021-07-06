import { renderWithTheme } from 'utils/tests/helpers'
import Main from '.'

describe('<Main />', () => {
  it('Should render color correctly', () => {
    const { container } = renderWithTheme(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#ffdf66' })
  })
})
