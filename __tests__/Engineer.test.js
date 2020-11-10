const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object with a github username', () => {
    const engineer = new Engineer('chriswein12');

    expect(engineer.github).toBe('chriswein12');
});

test('gets GitHub username', () => {
    const engineer = new Engineer('chriswein12');

    expect(engineer.github).toBe('chriswein12')
})

test('verifies role', () => {
    const engineer = new Engineer('chriswein12');

    expect(engineer.getRole()).toBe('Engineer');
});