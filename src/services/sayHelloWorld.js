exports.sayHello = (name='Heron') => {
    return `Hello ${name ? name : 'World'}!`
}