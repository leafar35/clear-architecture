/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Mock } from "src/utils/mock.helper";
import { ExpansesCustomError } from "src/domain/expanses/exception/expanses.error";
import { DeleteExpansesUseCase } from "src/domain/expanses/usecases/deleteexpanses.usecase";
import { DeleteExpanseService } from "src/domain/expanses/services/deleteexpanses.service";
import { ExpanseDataProvider } from "src/domain/expanses/dataprovider/expanse.dataprovider";

describe('delete expanse usecase', () => {
  let usecase: DeleteExpansesUseCase;
  const provider = Mock<ExpanseDataProvider>({
    create: jest.fn(),
    Update: jest.fn(),
    find: jest.fn(),
    delete: jest.fn(),
  });

  beforeEach(() => {
    usecase = new DeleteExpanseService(provider);
  });

  it('delete expanse return entity', async () => {
    provider.delete.mockResolvedValue(true);
    const response = await usecase.execute(1);
    expect(response).toBeTruthy();
  });

  it('delete expanse return null', async () => {
    provider.delete.mockResolvedValue(false);
    const response = await usecase.execute(1);
    expect(response).toBeFalsy();
  });

  it('throw message treated delete entity', async () => {
    provider.delete.mockRejectedValue(ExpansesCustomError);
    expect(async() => { await usecase.execute(1) }).rejects.toThrow(ExpansesCustomError);
  });

});