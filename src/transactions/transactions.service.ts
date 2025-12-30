import { Injectable } from '@nestjs/common';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto, Status } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  private transactions: Transaction[] = [
    { id: '1', amount: 100, type: 'DEPOSIT', timestamp: new Date() },
    { id: '2', amount: 50, type: 'WITHDRAW', timestamp: new Date() },
    { id: '3', amount: 200, type: 'DEPOSIT', timestamp: new Date() },
  ];

  findAll(type?: string) {
    if (type) {
      return this.transactions.filter((t) => t.type == type);
    }
    return this.transactions;
  }

  create(transaction: CreateTransactionDto) {
    const newTransaction = {
      id: Math.random().toString(36).substring(7),
      timestamp: new Date(),
      amount: transaction.amount,
      status: transaction.status ?? Status.PENDING,
      type: transaction.type
    } as Transaction;

    this.transactions.push(newTransaction);

    return newTransaction;
  }
}
