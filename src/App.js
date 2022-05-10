import { ScoreProvider } from "contexts";
import { QuestionsProvider } from "contexts/questions.context";
import { Home, Results, Rules } from "pages";
import Questions from "pages/Questions";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category' element={<Rules />} />
        <Route path='/:category/questions' element={
          <QuestionsProvider>
            <ScoreProvider>
              <Questions />
            </ScoreProvider>
          </QuestionsProvider>} />
        <Route path='/:category/results' element={
          <QuestionsProvider>
            <ScoreProvider>
              <Results />
            </ScoreProvider>
          </QuestionsProvider>
        } />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
