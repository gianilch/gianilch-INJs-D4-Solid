import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = String(request.headers.user_id);

    try {
      const usuarios = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).json(usuarios);
    } catch (e) {
      return response.status(400).json({ error: "User unauthorized." });
    }
  }
}

export { ListAllUsersController };
