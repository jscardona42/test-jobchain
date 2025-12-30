import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() body: any) {
    return this.transactionsService.create(body);
  }

  @Get()
  findAll(@Query('type') type?: string) {
    return this.transactionsService.findAll(type);
  }
}
