import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
// import UseCases from "./components/UseCases"
import NavBarTile from "./components/NavBarTile"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Dashboard from "./components/Dashboard"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <NavBarTile />
      <Home />
      {JSON.parse(localStorage.getItem("authenticated")) && <Dashboard />}
      {/* <UseCases /> */}
      <About />
      <Contact />
      <SignIn />
      <SignUp />
      <Footer />
    </div>
  )
}
export default App
