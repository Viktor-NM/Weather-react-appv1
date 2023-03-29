import axios from "axios"

const apikey = import.meta.env.VITE_WEATHER_API_KEY

console.log(apikey)

export const getLocate = async (city: string) => {
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${city}&language=es-MX`)
    
    return response.data[0]
}

export const getWeather = async (locateKey: string) => {
    const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locateKey}?apikey=${apikey}&details=true`)

    return response.data[0]
}