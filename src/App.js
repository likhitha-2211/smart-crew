import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import UseCases from "./components/UseCases"
import NavBarTile from "./components/NavBarTile"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Dashboard from "./components/Dashboard"
//import Dashboard from "./components/Dashboard"

function App() {
  // useEffect(() => {
  //   window.localStorage.setItem("authenticated", false)
  // }, [])
  return (
    <div>
      <NavBarTile />
      <Home />
      <Dashboard />
      <UseCases />
      <About />
      <Contact />
      <SignIn />
      <SignUp />
    </div>
  )
}
export default App
