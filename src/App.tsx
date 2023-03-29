import { useFetch, useWeather } from "./hooks/custom-hooks"

export const App = () => {
    const { locateKey, isLoading } = useFetch()
    // if (locateKey) useWeather(locateKey.Key)

    return <main>
        {
            isLoading ? <p>Cargando...</p> : <>
                <p>Key: {locateKey.Key}</p>
                <p>LocalizedName: {locateKey.LocalizedName}</p>
            </>
        }
    </main>
}