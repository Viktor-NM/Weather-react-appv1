import './styles/App.css'
import { TemperatureCard } from './components/TemperatureCard';
import { useWeatherContext } from './components/WeatherContext';
import { InputContainer } from './components/InputContainer';

export const App = () => {
    const { cities } = useWeatherContext()

    return <main className='background-light'>

        <div className='container'>

            <InputContainer />

            <section className='cities-container'>
                {
                    cities.map((city, index) => <TemperatureCard key={index} name={city} />)
                }
            </section>
        </div>

    </main>
}