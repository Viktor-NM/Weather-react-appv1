import { useState } from "react"
import { TemperatureData } from "./TemperatureData"
import { CurrentConditions } from "../types"
import style from '../styles/TemperatureCard.module.css'

export const TemperatureCard = ({ city }: { city: string }) => {
    const [currentConditions] = useState<CurrentConditions>({
        WeatherText: 'Sunny',
        Temperature: 33,
    })

    return <section className={style.cardContainer}>
        <header>{city}</header>

        <TemperatureData temp={{ num: currentConditions.Temperature, med: 'c' }} />

        <footer>
            <p>{currentConditions.WeatherText}</p>
        </footer>
    </section>
}