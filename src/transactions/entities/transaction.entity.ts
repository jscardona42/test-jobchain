import { Status } from "../dto/create-transaction.dto";

export class Transaction {
  id: string;
  amount: number;
  type: 'DEPOSIT' | 'WITHDRAW';
  timestamp: Date;
  status?: Status;
}
