/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Mock } from "src/utils/mock.helper";
import { ExpanseEntity } from "src/domain/expanses/entities/expanse.entity";
import { ExpanseDataProvider } from "src/domain/expanses/dataprovider/expanse.dataprovider";
import { CreateExpanseService } from "src/domain/expanses/services/createexpanses.service";
import { CreateExpansesUseCase } from "src/domain/expanses/usecases/createexpanses.usecase";

describe('create expanse usecase', () => {
  let usecase: CreateExpansesUseCase;
  const provider = Mock<ExpanseDataProvider>({
    create: jest.fn(),
    Update: jest.fn(),
    find: jest.fn(),
    delete: jest.fn(),
  });
  const entity = new ExpanseEntity(1, 'compra de balas', 1.50, 'expanse', 'frequency', new Date(Date.now()));

  beforeEach(() => {
    usecase = new CreateExpanseService(provider);
  });

  it('create expanse return entity', async () => {
    provider.create.mockResolvedValue(entity);
    const response = await usecase.execute(entity);
    expect(response).toBeInstanceOf(ExpanseEntity);
  });

  it('create expanse return null', async () => {
    provider.create.mockResolvedValue(null);
    const response = await usecase.execute(entity);
    expect(response).toBeNull();
  });

});