interface QuestionSignProps {}

const QuestionSign = () => {
  const foo = 0;

  const test = foo ?? 5; // wyświetli 0 - jeśli foo nie jest null lub undefined to do test przypusz foo (0 nie jest null wiec zostanie przypisane 0)
  const test2 = foo || 5; // wyświetli 5 - jeśli pierwsze wyrażenie jest falsyfikowalne to przypisz drugie (0 jest falsyfikowlne więc zostanie przypisane 5)

  console.log({ test });

  return <></>;
};

export default QuestionSign;
