"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log('DepartmentId: ' + this.id);
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No Report Found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid Value...');
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const itDpt = new ITDepartment('it', ['zooby']);
console.log(itDpt);
itDpt.addEmployee('Jooyeob');
itDpt.addEmployee('Max');
itDpt.describe();
itDpt.printEmployeeInformation();
const marketingCopy = { describe: itDpt.describe };
const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Success';
console.log(accounting.mostRecentReport);
accounting.addReport('Something went wrong...');
accounting.addEmployee('Manu');
//# sourceMappingURL=classes.js.map