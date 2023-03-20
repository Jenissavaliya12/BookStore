import React, { useReducer } from "react";

const inititalValue = [
  {
    id: 1,
    title: "Task 1",
    complete: false,
  },
  {
    id: 2,
    title: "Task 2",
    complete: false,
  },
  {
    id: 3,
    title: "Task 3",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "Complete":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

function Todo() {
  const [task, dispatch] = useReducer(reducer, inititalValue);
  const handleChange = (todo) => {
    dispatch({ type: "Complete", id: todo.id });
  };

  return (
    <>
      {task.map((todo) => (
        <div key={todo.id} className="text-center">
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleChange(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default Todo;
