import module_multiplication from './multiplication'

describe("Testes de multiplicação", () => {
    test("Deve verificar o resultado correto de uma multiplicação", () => {
        expect(module_multiplication(3.2, 2)).toBeCloseTo(6.4)
        expect(module_multiplication(2, 4)).toBe(8)})

    test("Deve verificar o resultado incorreto de uma multiplicação", () => {
        expect(module_multiplication(5, 3)).not.toBe(16)
        expect(module_multiplication(7, 7)).not.toBe(50)})
})