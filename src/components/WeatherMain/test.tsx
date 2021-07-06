import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import WeatherMain from '.'

const args = {
  name: 'Brasília',
  main: {
    temp: 24.13,
    feels_like: 23.48,
    temp_min: 21.98,
    temp_max: 24.03,
    pressure: 1019,
    humidity: 38
  },
  weather: {
    id: 800,
    main: 'Clear',
    description: 'céu limpo',
    icon: '01n'
  }
}

function makeSut() {
  renderWithTheme(<WeatherMain {...args} />)
}

describe('<WeatherMain />', () => {
  it('should render the heading', () => {
    makeSut()

    expect(
      screen.getByRole('heading', { name: /brasília/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /brasília/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render the description', () => {
    makeSut()
    expect(screen.getByText(args.weather.description)).toHaveStyle({
      'font-size': '1.8rem',
      'text-transform': 'capitalize'
    })
  })

  it('should render current temperature', () => {
    makeSut()

    expect(
      screen.getByRole('heading', { name: `${args.main.temp} ºC` })
    ).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render max temperature', () => {
    makeSut()

    expect(screen.queryByText(`${args.main.temp_max} ºC`)).toHaveStyle({
      color: '#FF6347',
      'border-right': '1px solid #EAEAEA',
      'padding-right': '0.8rem'
    })
  })

  it('should render min temperature', () => {
    makeSut()

    expect(screen.queryByText(`${args.main.temp_min} ºC`)).toHaveStyle({
      color: '#64B5F6',
      'margin-left': '0.8rem'
    })
  })

  it('should render current date', () => {
    makeSut()

    const convertDate = (): string => {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
      return new Date().toLocaleString('pt-BR', { timeZone })
    }

    expect(screen.queryByText(convertDate())).toHaveStyle({
      'font-size': '1.4rem'
    })
  })
})
