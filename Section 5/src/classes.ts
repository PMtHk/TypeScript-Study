abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log('DepartmentId: ' + this.id);
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No Report Found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid Value...');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string): void {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
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

// marketing.addEmployees[2] = 'Anna';
// private 으로 인해 에러발생.

itDpt.describe();
itDpt.printEmployeeInformation();

const marketingCopy = { describe: itDpt.describe };

// marketingCopy.describe();
// marketingCopy 는 Department Class 로 생성되지 않아 에러발생.
// 하지만, 위에 name 속성을 추가해주게 되면 에러발생하지 않는다.

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Success';
console.log(accounting.mostRecentReport);

accounting.addReport('Something went wrong...');

accounting.addEmployee('Manu');
