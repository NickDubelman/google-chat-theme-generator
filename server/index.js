class Foobarbaz{
    constructor(){
        this.foo = 'foo'
        this.bar = 'bar'
        const baz = {foo: 'foo', bar: 'bar'}
        const bang = { ...baz, bang: 'bang' }
        console.log(this.foo, this.bar, baz, bang)
    }
}

const foobarbaz = new Foobarbaz()
