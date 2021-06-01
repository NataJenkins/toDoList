import { addTask } from "../src/tasks";

it("works", () => {
  expect(1).toEqual(1);
});

describe("Tasks", () => {
  const testTask = addTask({
    title: "testTask",
    description: "testDescription",
    date: "03/03/2021",
    priority: 1,
  });
  it("Task should have given name", () => {
    expect(testTask.title).toEqual("testTask");
  });
  it("Task should have given description", () => {
    expect(testTask.description).toEqual("testDescription");
  });
  it("Task should have given date", () => {
    expect(testTask.date).toEqual("03/03/2021");
  });
  it("Task should have given priority", () => {
    expect(testTask.priority).toEqual(1);
  });
  it("Task should not have another name", () => {
    expect(testTask.title).not.toEqual("other");
  });
  it("Task should not have another descriprion", () => {
    expect(testTask.description).not.toEqual("other");
  });
  it("Task should not have another date", () => {
    expect(testTask.date).not.toEqual("other");
  });
  it("Task should not have another priority", () => {
    expect(testTask.priority).not.toEqual("other");
  });
});
