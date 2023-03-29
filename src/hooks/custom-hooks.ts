import { useEffect, useState } from "react"
import { getLocate, getWeather } from "../services/weather-api"
import { CurrentConditions, LocateKey } from "../types"

export const useFetch = () => {
    const [locateKey, setLocateKey] = useState<LocateKey>({
        Key: '',
        LocalizedName: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const {Key, LocalizedName} = await getLocate('acapulco')
                setLocateKey({Key, LocalizedName})

            } finally {
                setIsLoading(false)
                
            }
        }
        fetchData()
    }, [])

    return {locateKey, isLoading}
}

export const useWeather = (locateKey: string) => {
    const [weather, setWeather] = useState<CurrentConditions>({
        WeatherText: '',
        Temperature: 0,
        RealFeelTemperature: 0,
        RealFeelTemperatureShade: 0,
        Past12HourRange: {Maximum: 0, Minimum: 0}
    })
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        const fetchWeather = async () => {
            try {
                const { 
                    WeatherText,
                    Temperature: { Metric: { Value: TemperatureValue } },
                    RealFeelTemperature: { Metric: { Value: RealFeelTemperatureValue } },
                    RealFeelTemperatureShade: { Metric: { Value: RealFeelTemperatureShadeValue } },
                    TemperatureSummary: { Past12HourRange: { Minimum: { Metric: { Value: MinimumValue } }, Maximum: { Metric: { Value: MaximumValue } } } }
                } = await getWeather(locateKey);

                setWeather({
                    WeatherText,
                    Temperature: TemperatureValue,
                    RealFeelTemperature: RealFeelTemperatureValue,
                    RealFeelTemperatureShade: RealFeelTemperatureShadeValue,
                    Past12HourRange: {Minimum: MinimumValue, Maximum: MaximumValue}
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