import { useState } from "react"
import { useWeatherContext } from "./WeatherContext"
import { IconSearch } from "@tabler/icons-react"

export const InputContainer = () => {
    const { addCity } = useWeatherContext()
    const [search, setSearch] = useState<string>('')

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

    const handleOnClick = () => findCity()
    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && findCity()

    const findCity = () => {
        if (search) {
            addCity(search)
            setSearch('')
        }
    }

    return <header className='input-container'>
        <input className='glass' type="text" value={search} placeholder='Buscar ciudad...'
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown} />
        <button onClick={handleOnClick} className='glass' >
            <IconSearch color='#aaa' />
        </button>
    </header>
}