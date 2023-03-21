import { useRouteError } from "react-router-dom"
import Header from "./Header"
function Error() {
  const err = useRouteError();
  
  return (
    <>
    <Header/>
    <div className="container container-top-margin"  style={{color:'red'}}>
        <h1>OOPS!!!</h1>
        <h3>ERROR..........</h3>
        <p>The page you are looking for cannot be found. <br />{err.status} {err.statusText}</p>

      
    </div>
    </>
  )
}

export default Error