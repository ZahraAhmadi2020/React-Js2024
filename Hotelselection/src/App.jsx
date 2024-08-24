import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  return (
    <div className="px-2">
      <Header />

      <div className="row">
        <div className=" p-0  col-xl-12">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
