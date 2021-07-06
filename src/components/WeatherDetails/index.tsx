import { Main, Sys, Wind } from 'components/Main/weather.module'
import * as S from './styles'

type WeatherDetailsProps = {
  wind: Wind
  sys: Sys
  main: Main
}

const WeatherDetails = ({ wind, sys, main }: WeatherDetailsProps) => {
  const getTime = (milliseconds: number): string => {
    const date = new Date(milliseconds)
    console.log('Date', date)

    return date.toLocaleTimeString()
  }
  return (
    <S.Wrapper>
      <S.WrapperDetail>
        <S.Img src="img/sunrise-svgrepo-com.svg" />
        <S.Label>Nascer do sol</S.Label>
        <S.Value>{getTime(sys.sunrise)}</S.Value>
      </S.WrapperDetail>
      <S.WrapperDetail>
        <S.Img src="img/sunset-svgrepo-com.svg" />
        <S.Label>Por do sol</S.Label>
        <S.Value>{getTime(sys.sunset)}</S.Value>
      </S.WrapperDetail>
      <S.WrapperDetail>
        <S.Img src="img/humidity-svgrepo-com.svg" />
        <S.Label>Umidade</S.Label>
        <S.Value>{main.humidity}%</S.Value>
      </S.WrapperDetail>
      <S.WrapperDetail>
        <S.Img src="img/pressure-svgrepo-com.svg" />
        <S.Label>Pressão</S.Label>
        <S.Value>{main.pressure}hPa</S.Value>
      </S.WrapperDetail>
      <S.WrapperDetail>
        <S.Img src="img/wind-svgrepo-com-2.svg" />
        <S.Label>Vento</S.Label>
        <S.Value>{wind.speed}km/h</S.Value>
      </S.WrapperDetail>
      <S.WrapperDetail>
        <S.Img src="img/thermometer-weather-svgrepo-com.svg" />
        <S.Label>Sensão termica</S.Label>
        <S.Value>{main.feels_like}ºC</S.Value>
      </S.WrapperDetail>
    </S.Wrapper>
  )
}

export default WeatherDetails
