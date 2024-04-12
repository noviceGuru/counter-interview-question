import { useEffect, useState } from "react"
import "./App.css"

function App() {
    const [count, setCount] = useState(parseInt(localStorage.getItem("count") || "0"))
    const [startTime, setStartTime] = useState(0)

    useEffect(() => {
        localStorage.setItem("count", `${count}`)
    }, [count])

    const onMouseUp = (val: boolean) => {
      const endTime = Date.now()
      const elapseTime = endTime - startTime
      console.log(endTime, startTime, Date.now())
      console.log(elapseTime, 'elapseTime')
      switch(true){
        case (elapseTime <= 2000) :
            console.log('less than 2000')
            setCount(count => count + (val ?  5 : -5))
            break
        case (elapseTime >2000 && elapseTime< 3000) :
            setCount(count => count + (val ?  10 : -10))
            break
        case (elapseTime >3000 && elapseTime< 4000) :
            setCount(count => count + (val ?  5 : -5))
      }


    }

    return (
        <div className="container">
            <div className="counter">{count}</div>
            <div className="bottons-container">
                <button
                    onMouseDown={() => setStartTime(Date.now())}
                    onMouseUp={() => onMouseUp(true)}
                    className="button"
                >
                    +
                </button>
                <button
                    className="button"
                    onMouseDown={() => setStartTime(Date.now())}
                    onMouseUp={() => onMouseUp(false)}
                >
                    -
                </button>
            </div>
            <button onClick={() => setCount(0)} className="reset">
                reset
            </button>
        </div>
    )
}

export default App
