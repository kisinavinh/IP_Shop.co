import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src="./hero-img.jpg" alt="Katherine Johnson" />
      <h1>Знайдіть одяг, що підходить вашому стилю</h1>
      <div class="card">
        <p>
          Ознайомтеся з нашим асортиментом якісно виготовленого одягу, створеного, щоб підкреслити вашу індивідуальність.
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Купити зараз {count}
        </button>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
