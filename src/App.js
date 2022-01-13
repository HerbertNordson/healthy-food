import "./App.css";
import Best from "./components/best";
import Footer from "./components/footer";
import Header from "./components/header";
import Membership from "./components/membership";
import Read from "./components/read";
import Services from "./components/services";
function App() {
  return (
    <div className="App">
      <Header />
      <Best />
      <Services />
      <Read />
      <Membership />
      <Footer />
    </div>
  );
}

export default App;
