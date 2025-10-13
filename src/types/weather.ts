export interface WeatherType {
    base: string;
    clouds: {all: number}
    cod: number;
    coord: {lat: number; lng: number};
    dt: number;
    id: number;
    name: string
    main: {temp: number; feels_like: number; temp_min: number; temp_max: number; pressure: number; humidity: number; sea_level: number; grnd_level: number};
    sys: {type: number; id: number; country: string; sunrise: number; sunset: number}
    timezone: number;
    visibility: number;
    weather: {id: number; main: string; description: string; icon: string}[]
    wind: {speed: number; deg: number}
}