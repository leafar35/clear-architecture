/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Mock } from "src/utils/mock.helper";
import { ExpanseEntity } from "src/domain/expanses/entities/expanse.entity";
import { ExpanseDataProvider } from "src/domain/expanses/dataprovider/expanse.dataprovider";
import { ExpansesCustomError } from "src/domain/expanses/exception/expanses.error";
import { UpdateExpansesUseCase } from "src/domain/expanses/usecases/updateexpanses.usecase";
import { UpdateExpanseService } from "src/domain/expanses/services/updateexpanses.service";

describe('update expanse usecase', () => {
  let usecase: UpdateExpansesUseCase;
  const provider = Mock<ExpanseDataProvider>({
    create: jest.fn(),
    Update: jest.fn(),
    find: jest.fn(),
    delete: jest.fn(),
  });
  const entity = new ExpanseEntity(1, 'compra de balas', 1.50, 'expanse', 'frequency', new Date(Date.now()));

  beforeEach(() => {
    usecase = new UpdateExpanseService(provider);
  });

  it('update expanse return entity', async () => {
    provider.Update.mockResolvedValue(entity);
    const response = await usecase.execute(entity);
    expect(response).toBeInstanceOf(ExpanseEntity);
  });

  it('update expanse return null', async () => {
    provider.Update.mockResolvedValue(null);
    const response = await usecase.execute(entity);
    expect(response).toBeNull();
  });

  it('throw message treated update entity', async () => {
    provider.Update.mockRejectedValue(ExpansesCustomError);
    expect(async() => { await usecase.execute(entity) }).rejects.toThrow(ExpansesCustomError);
  });

});