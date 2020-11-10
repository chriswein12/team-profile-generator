const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a Manager object with an office telephone number', () => {
    const manager = new Manager(1, 'Chris', 'test@gmail.com', 100);

    expect(manager.officeNumber).toEqual(100);
});

test('verifies role', () => {
    const manager = new Manager(1, 'Chris', 'test@gmail.com', 100);

    expect(manager.getRole()).toBe('Manager');
});