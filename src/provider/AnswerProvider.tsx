import React, { ReactNode, createContext, useContext, useState } from 'react';

type CommentProps = {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
  answer7: string;
  answer8: string;
  answer9: string;
  answer10: string;
  setAnswer1: React.Dispatch<React.SetStateAction<string>>;
  setAnswer2: React.Dispatch<React.SetStateAction<string>>;
  setAnswer3: React.Dispatch<React.SetStateAction<string>>;
  setAnswer4: React.Dispatch<React.SetStateAction<string>>;
  setAnswer5: React.Dispatch<React.SetStateAction<string>>;
  setAnswer6: React.Dispatch<React.SetStateAction<string>>;
  setAnswer7: React.Dispatch<React.SetStateAction<string>>;
  setAnswer8: React.Dispatch<React.SetStateAction<string>>;
  setAnswer9: React.Dispatch<React.SetStateAction<string>>;
  setAnswer10: React.Dispatch<React.SetStateAction<string>>;
};

const AnswerContext = createContext<CommentProps>({} as CommentProps);

export const useAnswerContext = () => useContext(AnswerContext);

const useAnswerState = () => {
  const [answer1, setAnswer1] = useState('3');
  const [answer2, setAnswer2] = useState('3');
  const [answer3, setAnswer3] = useState('3');
  const [answer4, setAnswer4] = useState('3');
  const [answer5, setAnswer5] = useState('3');
  const [answer6, setAnswer6] = useState('3');
  const [answer7, setAnswer7] = useState('3');
  const [answer8, setAnswer8] = useState('3');
  const [answer9, setAnswer9] = useState('3');
  const [answer10, setAnswer10] = useState('3');

  return {
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7,
    answer8,
    answer9,
    answer10,
    setAnswer1,
    setAnswer2,
    setAnswer3,
    setAnswer4,
    setAnswer5,
    setAnswer6,
    setAnswer7,
    setAnswer8,
    setAnswer9,
    setAnswer10,
  };
};

type Props = {
  children: ReactNode;
};

export const AnswerProvider: React.FC<Props> = ({ children }) => {
  const answerContext = useAnswerState();

  return (
    <AnswerContext.Provider value={answerContext}>
      {children}
    </AnswerContext.Provider>
  );
};
