import { ScoreProvider } from "contexts";
import { Home, Results, Rules } from "pages";
import Questions from "pages/Questions";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category' element={<Rules />} />
        <Route path='/:category/questions' element={<ScoreProvider><Questions /></ScoreProvider>} />
        <Route path='/results' element={<ScoreProvider><Results /></ScoreProvider>} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
