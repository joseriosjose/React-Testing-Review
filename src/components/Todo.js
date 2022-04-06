const Todo = ({
  id = 1,
  title = "Titulo de ejemplo",
  completed = false,
  textColor = "Red",
}) => {
  const style = {
    color: textColor,
  };
  return (
    <div data-testid={`todo-${id}`} style={style}>
      {completed ? (
        <strike>
          <h1>{title}</h1>
        </strike>
      ) : (
        <h1>{title}</h1>
      )}
    </div>
  );
};
export default Todo;
