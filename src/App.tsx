import './styles/App.css'
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { TemperatureCard } from './components/TemperatureCard';

export const App = () => {
    const [cities, setCities] = useState([<TemperatureCard city='acapulco' />,
    <TemperatureCard city='acapulco' />,
    <TemperatureCard city='acapulco' />])

    return <main className='background-light'>

        <div className='container'>

            <header className='input-container'>
                <input className='glass' type="text" name="search" placeholder='Buscar ciudad...' />
                <button className='glass' >
                    <IconSearch color='#aaa' />
                </button>
            </header>

            <section className='cities-container'>
                {cities.map(city => city)}
            </section>
        </div>

    </main>
}