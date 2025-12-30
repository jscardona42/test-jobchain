import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from './transactions.service';

describe('TransactionService', () => {
    let service: TransactionsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TransactionsService],
        }).compile();

        service = module.get<TransactionsService>(TransactionsService);
    });

    describe('create', () => {
        it('should create a transaction matching entity structure', () => {
            const transaction = service.create({
                amount: 100,
                type: 'DEPOSIT',
            });

            expect(transaction).toMatchObject({
                amount: 100,
                type: 'DEPOSIT',
                status: 'PENDING',
            });
        });
    });

});

