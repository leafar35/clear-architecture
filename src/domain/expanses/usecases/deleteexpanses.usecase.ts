/* eslint-disable prettier/prettier */
export abstract class DeleteExpansesUseCase {

    abstract execute(id: number): Promise<boolean>

}