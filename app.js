// Child with state
const Add = (props) => {
  const NUMBER_TEN = 10
  console.log("render add....")
  return (
    <div>
      <p>{props.number}</p>
      <button onClick={props.onClickIncrease}>Add +1</button>
      <button onClick={props.onClickReset}>Reset 0</button>
      <button onClick={() => props.onClickTo10(NUMBER_TEN)}>Set 10</button>
    </div>
  )
}

// Child 
const Greeting = (props) => {
  const [isClick, setIsClick] = React.useState(false)

  const click = () => {
    setIsClick(prev => !prev)
  }
  console.log("render greeting....")

  return (
    <div>Helo--- <button onClick={click}>{isClick ? props.name : 'Sir'}</button></div>
  )
}

// Parent
const App = () => {
  const INITIAL_ZERO = 0
  const [number, setNumber] = React.useState(INITIAL_ZERO)

  const increaseHandler = () => {
    setNumber(prev => prev + 1)
  }

  const resetHandler = () => {
    setNumber(0)
  }

  const set10Handler = (num) => {
    setNumber(num)
  }

  console.log("render app...")
  return (
    <div>
      <h2>React</h2>
      <p>Nice</p>
      <Greeting name="MKK" />
      <Add number={number} onClickIncrease={increaseHandler} onClickReset={resetHandler} onClickTo10={set10Handler} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)