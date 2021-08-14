import { Request, Response, Router } from "express";
import { CalculadoraController } from "../controllers/calculadora.controller";

export default class CalculatorRoutes {
  public init(router: Router) {
    router.post("/calc", async (req: Request, res: Response) => {
      try {
        const { num1, num2 } = req.body;

        if (!num1 || !num2) {
          throw new Error("Parâmetros inválidos");
        }

        const calculadora = new CalculadoraController();
        const result = await calculadora.somar(num1, num2);

        return res.status(200).json({
          resultado: result,
        });
      } catch (error) {
        return res.status(400).json({
          message: error.message,
        });
      }
    });
  }
}
