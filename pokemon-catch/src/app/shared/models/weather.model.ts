export class Weather {
  constructor(
    public coord?: Coord,
    public weather?: WeatherStatus[],
    public base?: string,
    public main?: Main,
    public visibility?: number,
    public wind?: Wind,
    public clouds?: Clouds,
    public dt?: number,
    public sys?: Sys,
    public timezone?: number,
    public id?: number,
    public name?: string,
    public cod?: number
  ) {}
}

interface Coord {
  lon: number;
  lat: number;
}

interface WeatherStatus {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
