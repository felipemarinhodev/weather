import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import WeatherDetails from '.'

const args = {
  main: {
    temp: 24.03,
    feels_like: 23.48,
    temp_min: 21.98,
    temp_max: 24.03,
    pressure: 1019,
    humidity: 38
  },
  wind: {
    speed: 2.57,
    deg: 50
  },
  sys: {
    type: 1,
    id: 8336,
    country: 'BR',
    sunrise: 1624786721,
    sunset: 1624827027
  }
}

function makeSut() {
  const { container } = renderWithTheme(<WeatherDetails {...args} />)
  return { container }
}

describe('<WeatherDetails />', () => {
  it('should render the WeatherDetails component correctly', () => {
    makeSut()
    expect(screen.getAllByRole('listitem')).toHaveLength(6)
  })
})
