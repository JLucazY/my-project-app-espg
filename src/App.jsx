import React from 'react'

export default function App() {
  return (
    <>
        <div className="container">
         
            <section>
                <p><a href="#">Home page</a></p>
                <button onClick={() => alert("Hello World!")}>
                    Click Me!
                </button>
            </section>
            <footer>
                <p>&copy; 2021, Vite.Js and react</p>
            </footer>
        </div>
    </>
  )
}
