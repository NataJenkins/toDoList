import { addProject } from "../projects";

it("works", () => {
  expect(1).toEqual(1);
});

describe("Projects", () => {
  const testProject = addProject({ name: "hola" });
  console.log(testProject);
  it("Project should have given name", () => {
    expect(testProject.name).toEqual("hola");
  });
  it("Project should not have another name", () => {
    expect(testProject.name).not.toEqual("project");
  });
});
