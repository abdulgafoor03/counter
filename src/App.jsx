
import "./App.css";
import Card from "./components/card";
import ReactContext from "./reactContext";
import ReduxContent from "./reduxContent";


function App() {

  return (
    <main>
      <Card/>
      <ReactContext></ReactContext>
      <ReduxContent></ReduxContent>
    </main>
  );
}

export default App;
