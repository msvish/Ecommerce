import Login from "./Components/Login/login";
import Header from "./Components/Header/header";
import MainSlider from "./Components/Main/main";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-full h-screen">
        <div className="h-1/6">
          <Header></Header>
        </div>
        <div className="h-5/6">
          <MainSlider></MainSlider>
        </div>
      </div>
    </div>
  );
}

export default App;
