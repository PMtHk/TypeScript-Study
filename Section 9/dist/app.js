"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedHTMLContent = document.importNode(this.templateElement.content, true);
        this.element = importedHTMLContent.firstElementChild;
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();
//# sourceMappingURL=app.js.map