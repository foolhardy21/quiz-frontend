import { Home, Rules } from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/:category' element={<Rules />} />

      </Routes>
    </BrowserRouter>
  );

}

export default App;
