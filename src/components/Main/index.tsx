import { useEffect, useState } from 'react'
import Loading from 'components/Loading'
import { http } from '../../http'
import * as S from './styles'
import WeatherDetails from 'components/WeatherDetails'
import WeatherMain from 'components/WeatherMain'
import { WeatherInfo } from './weather.module'

const Main = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>()

  useEffect(() => {
    fetchWeather()
  }, [])

  const fetchWeather = () => {
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(async (position) => {
      const params = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        appid: process.env.NEXT_PUBLIC_API_KEY,
        units: 'metric',
        lang: 'pt_br'
      }
      http
        .get('weather', { params })
        .then((response) => setWeatherInfo(response.data))
        .finally(() => setIsLoading(false))
    })
  }

  return (
    <S.Wrapper>
      <S.WrapperContainer>
        {isLoading && <Loading />}
        {!isLoading && weatherInfo && (
          <>
            <S.Close onClick={fetchWeather}>
              <img src="img/refresh-svgrepo-com.svg" />
            </S.Close>
            <WeatherMain
              name={weatherInfo.name}
              weather={weatherInfo.weather[0]}
              main={weatherInfo.main}
            />

            <WeatherDetails
              main={weatherInfo.main}
              sys={weatherInfo.sys}
              wind={weatherInfo.wind}
            />
          </>
        )}
      </S.WrapperContainer>
    </S.Wrapper>
  )
}

export default Main
