const request = require("supertest");
const server = require("../../src/server");

describe("Todo API", () => {
  let app;
  beforeAll(() => {
    app = server();
  });

  it("GET /api/todo returns todos", async () => {
    const res = await request(app).get("/api/todo");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.todos)).toBe(true);
  });

  it("POST /api/todo adds a new todo and returns updated list", async () => {
    const newTask = { task: "New task" };
    const res = await request(app).post("/api/todo").send(newTask);

    expect(res.statusCode).toBe(201);
    expect(res.body.todos.find((t) => t.task === newTask.task)).toEqual({
      task: "New task",
    });
  });

  it("POST /api/todo fails without task", async () => {
    const res = await request(app).post("/api/todo").send({});

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("task is required");
  });
});
