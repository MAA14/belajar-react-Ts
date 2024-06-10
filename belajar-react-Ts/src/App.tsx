import './App.css'
import { Button } from './latihan-typing-syntax/Button'

function App() {
  return (
    <>
      <div className='container'>
        {/* Belajar Setup Props untuk CSS Styling dengan type React.CSSProperties 
        *** @Important kurung kurawal "{}" pertama adalah untuk TSX dan "{}" kedua untuk destructuring React.CSSProperties
        */}
        <Button 
        buttonStyle={{
          width: "150px",
          height: "50px",
          backgroundColor: "#212121",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        textStyle={{
          color: "white",
          textDecoration: "none"
        }}
        ></Button>
      </div>
    </>
  )
}

export default App
