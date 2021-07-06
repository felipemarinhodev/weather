export type Weather = {
  id: number
  main: string
  description: string
  icon: string
}
export type Main = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export type Wind = {
  speed: number
  deg: number
}

type Coord = {
  lon: number
  lat: number
}

type Clouds = {
  all: number
}

export type Sys = {
  type: number
  id: number
  message?: number
  country: string
  sunrise: number
  sunset: number
}

export interface WeatherInfo {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}
