import { App } from "../../src/app";
import request from "supertest";
import express, { Router } from "express";
import CalculatorRoutes from "../../src/routes/routes";

describe("Rotas da calculadora", () => {
  const server = new App().server;

  beforeAll(async () => {
    const router = Router();
    server.use(express.json());
    server.use(router);

    new CalculatorRoutes().init(router);
  });

  describe("/POST calc", () => {
    test("deve retornar 200 ao somar", async () => {
      await request(server)
        .post("/calc")
        .send({ num1: 1, num2: 1 })
        .expect(200, { resultado: 2 });
    });

    test("deve retornar 400 se num1 não for válido", async () => {
      await request(server)
        .post("/calc")
        .send({ num2: 1 })
        .expect(400, { message: "Parâmetros inválidos" });
    });

    test("deve retornar 400 se num2 não for válido", async () => {
      await request(server)
        .post("/calc")
        .send({ num1: 1 })
        .expect(400, { message: "Parâmetros inválidos" });
    });
    test("deve retornar 400 se o body não for válido", async () => {
      await request(server)
        .post("/calc")
        .send({})
        .expect(400, { message: "Parâmetros inválidos" });
    });
  });
});
