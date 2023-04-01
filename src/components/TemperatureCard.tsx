import { useEffect, useState } from "react"
import { TemperatureData } from "./TemperatureData"
import { CurrentConditions } from "../types"
import style from '../styles/TemperatureCard.module.css'
import { useCity, useWeather } from "../hooks/custom-hooks"

export const TemperatureCard = ({ name }: { name: string }) => {
    const [currentConditions, setCurrentConditions] = useState<CurrentConditions>({
        WeatherText: '',
        Temperature: 0,
    })
    const [loading, setLoading] = useState(false)
    const { locateKey, error } = useCity(name)

    if (error) return <section className={style.cardContainer}>
        <header>{name} - Not found...</header>
    </section>

    const { isLoading, weather } = useWeather(locateKey?.Key)

    useEffect(() => {
        if (locateKey?.Key) {
            setLoading(isLoading)
            setCurrentConditions(weather)
        }
    }, [locateKey, isLoading, weather])



    return <section className={style.cardContainer}>
        {
            loading ?
                <p>Loading...</p> :
                <>
                    <header>{name}</header>
                    <TemperatureData temp={{ num: currentConditions.Temperature, med: 'c' }} weather={currentConditions.WeatherText} />
                    <footer>
                        <p>{currentConditions.WeatherText}</p>
                    </footer>
                </>
        }
    </section>
}