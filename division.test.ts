import module_division from './division'

describe("Testes de divisão", () => {
    test("Deve verificar o resultado correto de uma divisão", () => {
        expect(module_division(3.2, 2)).toBeCloseTo(1.6)
        expect(module_division(9, 3)).toBe(3)})

    test("Deve verificar o resultado incorreto de uma divisão", () => {
        expect(module_division(5, 3)).not.toBe(2)
        expect(module_division(7, 7)).not.toBe(0)})
})