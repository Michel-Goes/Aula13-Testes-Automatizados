const library_module = require('./some')

test("Deve verificar o resultado de uma soma", () => {
    expect(library_module(3, 8)).toBe(11)
})