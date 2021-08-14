import express, { Router } from "express";
import ProjectsRoutes from "./routes/routes";

export class App {
  readonly #express: express.Application;

  constructor() {
    this.#express = express();
  }

  public get server(): express.Application {
    return this.#express;
  }

  public init(): void {
    this.middlewares();
    this.routes();
  }

  public middlewares(): void {
    this.#express.use(express.json());
    this.#express.use(express.urlencoded({ extended: false }));
  }

  public routes(): void {
    const router = Router();

    new ProjectsRoutes().init(router);

    this.#express.use(router);
  }

  /* instanbul ignore next */
  public start(port: number): void {
    this.#express.listen(port, () =>
      console.log(`🚀 Server is running on ${port} 🚀`)
    );
  }
}
