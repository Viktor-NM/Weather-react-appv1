import './styles/App.css'
import { IconMoon, IconSearch, IconSun } from '@tabler/icons-react';
import { useState } from 'react';

export const App = () => {
    const [value, setValue] = useState({ num: 33, med: 'c' })

    const parseC = () => setValue({ num: 33, med: 'c' })
    const parseF = () => setValue({ num: ((value.num * 9) / 5) + 32, med: 'f' }
    )

    return <main className='background-light'>

        <div className='container'>

            <header className='input-container'>
                <input className='glass' type="text" name="search" placeholder='Buscar ciudad...' />
                <button className='glass' >
                    <IconSearch color='#aaa' />
                </button>
            </header>
            <section className='card-container glass'>
                <header>Acapulco</header>

                <section className='temperature-data'>
                    <IconSun size={100} />
                    <div className='temperature-range'>
                        <p>{value.num}</p>
                        <p className='temperature-medida'>
                            <span onClick={parseC} className={`${value.med === 'c' && 'medida'}`}>°C</span>
                            <span onClick={parseF} className={`${value.med === 'f' && 'medida'}`}>°F</span>
                        </p>
                    </div>
                </section>

                <footer>

                    <div className='temperature-data' >
                        <IconMoon size={48} color='#aaa' />
                        <div className='temperature-range'>
                            <p>{value.num}</p>
                            <p className='temperature-medida'>
                                <span onClick={parseC} className={`${value.med === 'c' && 'medida'}`}>°C</span>
                                <span onClick={parseF} className={`${value.med === 'f' && 'medida'}`}>°F</span>
                            </p>
                        </div>
                    </div>

                    <p>sunny</p>
                </footer>
            </section>

        </div>

    </main>
}