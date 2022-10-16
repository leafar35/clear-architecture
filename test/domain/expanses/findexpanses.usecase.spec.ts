/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Mock } from "src/utils/mock.helper";
import { ExpanseEntity } from "src/domain/expanses/entities/expanse.entity";
import { ExpansesCustomError } from "src/domain/expanses/exception/expanses.error";
import { FindExpansesUseCase } from "src/domain/expanses/usecases/findexpanses.usecase";
import { FindExpanseService } from "src/domain/expanses/services/findexpanses.service";
import { ExpanseDataProvider } from "src/domain/expanses/dataprovider/expanse.dataprovider";

describe('find expanse usecase', () => {
  let usecase: FindExpansesUseCase;
  const provider = Mock<ExpanseDataProvider>({
    create: jest.fn(),
    Update: jest.fn(),
    find: jest.fn(),
    delete: jest.fn(),
  });
  const entity = new ExpanseEntity(1, 'compra de balas', 1.50, 'expanse', 'frequency', new Date(Date.now()));
  const entitys = [
    new ExpanseEntity(1, 'compra de balas', 1.50, 'expanse', 'frequency', new Date(Date.now()))
  ];

  beforeEach(() => {
    usecase = new FindExpanseService(provider);
  });

  it('find all expanse type array', async () => {
    provider.find.mockResolvedValue(entity);
    const response = await usecase.execute();
    expect(response).toBeInstanceOf(ExpanseEntity);
  });

  it('find one entity expansive', async () => {
    provider.find.mockResolvedValue(entitys);
    const response = await usecase.execute(1);
    expect(response).toBeInstanceOf(Array<ExpanseEntity>);
  });

  it('find one expanse return null', async () => {
    provider.find.mockResolvedValue(null);
    const response = await usecase.execute(1);
    expect(response).toBeNull();
  });

  it('find all expanse return null', async () => {
    provider.find.mockResolvedValue(null);
    const response = await usecase.execute();
    expect(response).toBeNull();
  });

  it('throw message treated find one entity', async () => {
    provider.find.mockRejectedValue(ExpansesCustomError);
    expect(async() => { await usecase.execute(1) }).rejects.toThrow(ExpansesCustomError);
  });

  it('throw message treated find all entitys', async () => {
    provider.find.mockRejectedValue(ExpansesCustomError);
    expect(async() => { await usecase.execute(1) }).rejects.toThrow(ExpansesCustomError);
  });

});