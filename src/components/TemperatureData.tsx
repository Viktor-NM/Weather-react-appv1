import { memo, useCallback, useMemo, useState } from "react"
import style from '../styles/TemperatureCard.module.css'
import { IconWeather } from "./IconWeather"

type TMeasure = {
    c: () => void,
    f: () => void
}

type temp = {
    num: number,
    med: 'c' | 'f',
}

interface TemperatureProps {
    temp: temp,
    weather: string
}

export const TemperatureData = memo(({ temp, weather }: TemperatureProps) => {
    const [measure, setMeasure] = useState<temp>(temp)

    const tMeasure = useMemo<TMeasure>(() => ({
        c: () => setMeasure(temp),
        f: () => {
            if (measure.med === 'c') {
                setMeasure({ num: Math.floor(((measure.num * 9) / 5) + 32), med: 'f' })
            }
        }
    }), [measure])

    const changeMeasure = useCallback((typeMeasure: keyof TMeasure) => {
        tMeasure[typeMeasure]()
    }, [measure])

    return <section className={style.temperatureData}>
        <IconWeather weather={weather} />
        <div className={style.temperatureMeasure}>
            <p>{measure.num}</p>
            <p className={style.temperatureType}>
                <span onClick={() => changeMeasure('c')} className={`${measure.med === 'c' && style.measure}`}>°C</span>
                <span onClick={() => changeMeasure('f')} className={`${measure.med === 'f' && style.measure}`}>°F</span>
            </p>
        </div>
    </section>
})