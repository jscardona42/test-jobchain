import { IsNotEmpty, IsOptional } from "class-validator";

export enum Status {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED'
}

export class CreateTransactionDto {
    @IsOptional()
    status?: Status;

    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    type: string;
}





