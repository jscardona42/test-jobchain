export class Transaction {
  id: string;
  amount: number;
  type: 'DEPOSIT' | 'WITHDRAW';
  timestamp: Date;
  status?: string;
}
