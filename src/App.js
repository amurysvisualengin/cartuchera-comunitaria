import Sidebar from "./components/sidebar/Sidebar";
import CardGrid from "./components/cardgrid/CardGrid";
import "./App.css";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  //choose the screen size for mobile

  return (
    <div className="block xl:flex background-html">
      <Menu />
      <Header />
      <Sidebar />
      <CardGrid />
    </div>
  );
}

export default App;
