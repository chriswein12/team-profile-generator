const Intern = require('../lib/Intern');

test('creates an Intern object with a school', () => {
    const intern = new Intern(1, 'Chris', 'test@gmail.com', 'University of Wisconsin');

    expect(intern.school).toBe('University of Wisconsin');
});

test('gets school', () => {
    const intern = new Intern(1, 'Chris', 'test@gmail.com', 'University of Wisconsin');

    expect(intern.school).toBe('University of Wisconsin')
})

test('verifies role', () => {
    const intern = new Intern(1, 'Chris', 'test@gmail.com', 'University of Wisconsin');

    expect(intern.getRole()).toBe('Intern');
});