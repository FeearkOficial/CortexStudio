const QAPair = ({ question, answer, classNamePrefix }) => {
  return (
    <div className={`${classNamePrefix}-pair`}>
      <div className={`${classNamePrefix}-question`}>{question}</div>
      <div className={`${classNamePrefix}-answer`}>{answer}</div>
    </div>
  );
};

export default QAPair;