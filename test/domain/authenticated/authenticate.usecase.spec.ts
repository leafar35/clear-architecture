/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Mock } from "src/utils/mock.helper";
import { AuthenticateUseCase } from "src/domain/authenticated/usecases/authenticate.usecase";
import { AuthenticateService } from "src/domain/authenticated/services/authenticate.service";
import { AuthenticateDataProvider } from "src/domain/authenticated/dataprovider/authenticate.dataprovider";
import { AuthenticatedError } from "src/domain/authenticated/exception/authenticate.error";
import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "src/domain/authenticated/entities/user.entity";

describe('authenticated usecase', () => {
  let usecase: AuthenticateUseCase;
  const provider = Mock<AuthenticateDataProvider>({
    authenticate: jest.fn(),
  });
  const jwtservice = Mock<JwtService>({
    signAsync: jest.fn()
  });
  const userentity = new UserEntity(1,'rafael','rafael@gmail.com.br','123456',null, null);

  beforeEach(() => {
    usecase = new AuthenticateService(provider, jwtservice);
  });

  it('authenticated return token jwt', async () => {
    jwtservice.signAsync.mockResolvedValue("jwttoken");
    provider.authenticate.mockResolvedValue(userentity);
    const response = await usecase.execute("rafael@gmail.com", "123456");
    expect(response).toBe('jwttoken');
  });

  it('authenticated return null', async () => {
    provider.authenticate.mockRejectedValue(null);
    expect(async() => { await usecase.execute("rafael@gmail.com", "123456"); }).rejects.toThrow(AuthenticatedError);
  });

  it('throw message treated create entity', async () => {
    provider.authenticate.mockRejectedValue(AuthenticatedError);
    expect(async() => { await usecase.execute("rafael@gmail.com", "123456"); }).rejects.toThrow(AuthenticatedError);
  });

});