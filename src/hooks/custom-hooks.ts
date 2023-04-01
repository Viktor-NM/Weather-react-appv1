import { useEffect, useState } from "react"
import { getLocate, getWeather } from "../services/weather-api"
import { CurrentConditions, LocateKey } from "../types"

export const useCity = (city: string) => {
    const [locateKey, setLocateKey] = useState<LocateKey>({
        Key: '',
        LocalizedName: ''
    })
    
    useEffect(() => {
            const fetchData = async () => {
                const data = await getLocate(city)
                setLocateKey({Key: data[0].Key, LocalizedName: data[0].LocalizedName})
            }
            fetchData()
    }, [city])

    return locateKey
}

export const useWeather = (locateKey: string) => {
    const [weather, setWeather] = useState<CurrentConditions>({
        WeatherText: '',
        Temperature: 0,
    })
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        const fetchWeather = async () => {
            try {
                const data = await getWeather(locateKey);
                
                const { 
                    WeatherText,
                    Temperature: { Metric: { Value: TemperatureValue } }
                } = data[0]

                setWeather({
                    WeatherText,
                    Temperature: TemperatureValue
                })

            } catch(error) {
                console.error(error);
            }finally {
                setIsLoading(false)
                
            }
        }
        fetchWeather()
    },[locateKey])

    return {weather, isLoading}
}