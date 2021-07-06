import { Main, Weather } from 'components/Main/weather.module'
import * as S from './styles'

type WeatherMainPros = {
  name: string
  weather: Weather
  main: Main
}

const WeatherMain = ({ name, weather, main }: WeatherMainPros) => {
  const convertDate = (): string => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return new Date().toLocaleString('pt-BR', { timeZone })
  }

  return (
    <S.Wrapper>
      <S.Img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} />
      <S.WrapperMain>
        <S.WrapperLocation>
          <S.Title>{name}</S.Title>
          <S.Description>{weather.description}</S.Description>
          <S.Label>{convertDate()}</S.Label>
        </S.WrapperLocation>
        <S.WrapperTemp>
          <S.Title className="main-temp">{main.temp} ºC</S.Title>
          <S.WrapperTempVariant>
            <div className="tempMax">{main.temp_max} ºC</div>
            <div className="tempMin">{main.temp_min} ºC</div>
          </S.WrapperTempVariant>
        </S.WrapperTemp>
      </S.WrapperMain>
    </S.Wrapper>
  )
}
export default WeatherMain
