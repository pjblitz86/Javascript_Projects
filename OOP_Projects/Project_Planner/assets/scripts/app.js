class Tooltip {}

class ProjectItem {}

class ProjectList {
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
  }
}

class App {
  static init() {
    const activeProject = new ProjectList("active");
    const finishedProject = new ProjectList("finished");
  }
}

App.init();
