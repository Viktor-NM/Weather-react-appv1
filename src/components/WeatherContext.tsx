import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface WeatherContextProps {
    cities: string[],
    addCity: (c: string) => void
}

const WeatherContext = createContext<WeatherContextProps>({
    cities: [],
    addCity: (c: string) => { }
})

export const useWeatherContext = () => useContext(WeatherContext)

export const WeatherProvider = ({ children }: { children: ReactNode }) => {

    const [cities, setCities] = useState<Array<string>>([])
    const [city, setCity] = useState<string>('')

    useEffect(() => {
        if (city) {
            if (cities.length > 2) {
                cities.shift()
            }

            setCities([...cities, city])
        }
    }, [city])

    return <WeatherContext.Provider value={{
        addCity: (c: string) => setCity(c),
        cities
    }}>
        {children}
    </WeatherContext.Provider>
}