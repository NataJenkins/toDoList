import Projects from "../projects";

it("works", () => {
  expect(1).toEqual(1);
});

describe("Projects", () => {
  const { addProject } = Projects();
  const testProject = addProject({ name: "hola" });
  it("Project should have given name", () => {
    expect(testProject.name).toEqual("hola");
  });
  it("myProject should not have another name", () => {
    expect(testProject.name).not.toEqual("project");
  });
});
