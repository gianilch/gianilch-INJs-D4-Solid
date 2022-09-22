import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const requestUser = this.usersRepository.findById(user_id);

    if (!requestUser) {
      throw 400;
    }

    const userIsAdmin = requestUser.admin;

    if (!userIsAdmin) {
      throw 404;
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
