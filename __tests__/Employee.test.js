const Employee = require('../lib/Employee');

test('create an employee object', () => {
    const employee = new Employee(1, 'Chris', 'test@gmail.com');

    expect(employee.id).toEqual(1);
    expect(employee.name).toBe('Chris');
    expect(employee.email).toBe('test@gmail.com');
});

test("gets an employee's name", () => {
    const employee = new Employee(1, 'Chris', 'test@gmail.com');
    
    expect(employee.getName()).toBe('Chris');
})


test('gets an employee ID', () => {
    const employee = new Employee(1, 'Chris', 'test@gmail.com');

    expect(employee.getId()).toBe(1);
});

test('verifies email', () => {
    const employee = new Employee(1, 'Chris', 'test@gmail.com');

    expect(employee.getEmail()).toBe('test@gmail.com');
});

test('verifies role', () => {
    const employee = new Employee(1, 'Chris', 'test@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});