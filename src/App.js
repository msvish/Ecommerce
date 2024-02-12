import Login from "./Components/Login/login";
import Header from "./Components/Header/header";
import "./App.css";
import Main from "./Components/Main/main";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-full h-screen">
        <div className="h-1/6">
          <Header></Header>
        </div>
        <div className="h-5/6 max-h-5/6 overflow-y-auto scroll-smooth">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
