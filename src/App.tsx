import Headers from "./components/Headers";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewBlog from "./components/AddNewBlog";
import { useState } from "react";
function App() {
  const [change,setChange] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Headers change={change} setChange={setChange}/>
            </div>
          }
        ></Route>
        <Route path="/add" element={<AddNewBlog change={change} setChange={setChange}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
