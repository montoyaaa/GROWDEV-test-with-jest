import { CalculadoraController } from "../../src/controllers/calculadora.controller";
// import { describe, expect, test } from "@jest/globals";

// SUT = System Under Test

describe("Calculadora Controller", () => {
  const sut = new CalculadoraController();

  describe("Soma", () => {
    test("Deve retornar 4 ", async () => {
      const result = await sut.somar(2, 2);

      expect(result).toEqual(4);
    });
    test("Deve retornar uma Exception ", async () => {
      let future = sut.somar(2, -1);
      expect(future).rejects.toThrow(new Error("Parâmetros inválidos"));

      expect(sut.somar(-2, 4)).rejects.toThrow(
        new Error("Parâmetros inválidos")
      );
      expect(sut.somar(-3, -1)).rejects.toThrow(
        new Error("Parâmetros inválidos")
      );

      // quando o erro for uma promise, deve chamar o rejects:
      //✅ expect(sut.somar(-2, 4)).rejects.toThrow(new Error("Parâmetros inválidos"));

      //❌ expect(sut.somar(-2, 4)).toThrow(new Error("Parâmetros inválidos"));
    });
  });
});
