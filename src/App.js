import { ScoreProvider } from "contexts";
import { QuestionsProvider } from "contexts/questions.context";
import { Home, Login, Results, Rules, Signup } from "pages";
import Questions from "pages/Questions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "components/RequireAuth";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category' element={
          <RequireAuth>
            <Rules />
          </RequireAuth>
        } />
        <Route path='/:category/questions' element={
          <QuestionsProvider>
            <ScoreProvider>
              <RequireAuth>
                <Questions />
              </RequireAuth>
            </ScoreProvider>
          </QuestionsProvider>} />
        <Route path='/:category/results' element={
          <QuestionsProvider>
            <ScoreProvider>
              <RequireAuth>
                <Results />
              </RequireAuth>
            </ScoreProvider>
          </QuestionsProvider>
        } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
