const repository = require("../../src/repository/todo");

describe("TODO repository", () => {
  it("should return the todo list", async () => {
    const expected = {
      todos: [
        {
          task: "This is a todo example",
        },
      ],
    };
    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });

  it("should add a new todo to the list", async () => {
    const newTodo = { task: "New task" };
    const added = await repository.addTodo(newTodo);

    expect(added).toEqual(newTodo);
    const todos = await repository.getTodos();
    expect(todos.todos).toContainEqual(newTodo);
  });
});
