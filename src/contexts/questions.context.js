import { createContext, useContext, useState } from "react";

const QuestionsContext = createContext()

export const QuestionsProvider = ({ children }) => {
    const [questions, setQuestions] = useState([{
        question: 'loading'
    }])

    return (
        <QuestionsContext.Provider
            value={{
                questions,
                setQuestions,
            }}
        >
            {children}
        </QuestionsContext.Provider>
    )
}

export const useQuestions = () => useContext(QuestionsContext)