import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from './transactions.service';

describe('TweetsService', () => {
    let service: TransactionsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TransactionsService],
        }).compile();

        service = module.get<TransactionsService>(TransactionsService);
    });

    describe('create', () => {
        it('should successfully create transaction', async () => {
            const result: any = { id: '1', amount: 100, type: 'DEPOSIT', timestamp: new Date() };

            const newUser = await service.create({ id: '1', amount: 100, type: 'DEPOSIT', timestamp: new Date() });

            expect(newUser).toEqual(result);
        });
    });
});

