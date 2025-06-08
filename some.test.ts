import library_module from './some'

describe("Testes de soma", () => {
    test("Deve verificar o resultado correto de uma soma", () => {
        expect(library_module(3, 8)).toBe(11)})

    test("Deve verificar o resultado incorreto de uma soma", () => {
        expect(library_module(3, 8)).not.toBe(12)})
})