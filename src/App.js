import { Home, Rules } from "pages";
import Questions from "pages/Questions";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/:category' element={<Rules />} />

        <Route path='/:category/questions' element={<Questions />} />

      </Routes>
    </BrowserRouter>
  );

}

export default App;
