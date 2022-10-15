/* eslint-disable prettier/prettier */
export function Mock<T>(clazz: unknown): jest.Mocked<T> {  
  //return new (<new () => T> clazz)() as jest.Mocked<T>;
  return clazz as jest.Mocked<T>;
}
