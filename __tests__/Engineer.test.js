const Engineer = require('../lib/Engineer');

test('creates an Engineer object with a github username', () => {
    const engineer = new Engineer(1, 'Chris', 'test@gmail.com', 'chriswein12');

    expect(engineer.github).toBe('chriswein12');
});

test('gets GitHub username', () => {
    const engineer = new Engineer(1, 'Chris', 'test@gmail.com', 'chriswein12');

    expect(engineer.github).toBe('chriswein12')
})

test('verifies role', () => {
    const engineer = new Engineer(1, 'Chris', 'test@gmail.com', 'chriswein12');

    expect(engineer.getRole()).toBe('Engineer');
});