import { getUuid } from '../libs/getUuid';
import { User } from '../domain/authZ';

export const makeFakeUser = (overrides?: Partial<User>): User => {
  return {
    id: getUuid(),
    role: 'demandeur',
    ...overrides,
  };
};
