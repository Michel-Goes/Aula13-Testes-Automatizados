import module_subtration from './subtration'

describe("Testes de subtração", () => {
    test("Deve verificar o resultado correto de uma subtração", () => {
        expect(module_subtration(4.3, 2.1)).toBeCloseTo(2.2)
        expect(module_subtration(2, 4)).toBe(-2)})

    test("Deve verificar o resultado incorreto de uma subtração", () => {
        expect(module_subtration(6, 3)).not.toBe(4)
        expect(module_subtration(9, 8)).not.toBe(2)})
})