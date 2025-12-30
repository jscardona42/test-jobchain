import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateTransactionDto {
    @IsNotEmpty()
    id: string;

    @IsOptional()
    status: string = "PENDING"

    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    type: string;
}





