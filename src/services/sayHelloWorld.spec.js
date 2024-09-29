const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('Should say Hello Heron', () => {
        const response = sayHelloWorld.sayHello('Heron');

        expect(response).toBe('Hello Heron!');
    })
});