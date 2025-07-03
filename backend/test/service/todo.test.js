describe("TODO Service", () => {
  it("should be able to get todos from repository", async () => {
    const expected = {
      todos: [
        {
          task: "This is a task to be done",
        },
      ],
    };
    const todoRepository = {
      getTodos: async () => Promise.resolve(expected),
    };

    const todoService = require("../../src/service/todo")(todoRepository);
    const actual = await todoService.getTodos();
    expect(actual).toEqual(expected);
  });

  it("should be able to add a todo to repository", async () => {
    const newTodo = { task: "New task" };
    const expected = { task: "New task" };

    const todoRepository = {
      addTodo: async (todo) => Promise.resolve(todo),
      getTodos: async () => Promise.resolve({ todos: [expected] }),
    };

    const todoService = require("../../src/service/todo")(todoRepository);

    const actual = await todoService.addTodo(newTodo);
    expect(actual).toEqual(expected);
  });
});
