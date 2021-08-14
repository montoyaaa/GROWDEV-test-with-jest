export class CalculadoraController {
  async somar(num1: number, num2: number) {
    if (num1 < 0 || num2 < 0) {
      throw new Error("Parâmetros inválidos");
    }

    return num1 + num2;
  }
}
