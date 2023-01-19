import { Test, TestingModule } from '@nestjs/testing';
import { OvenService } from './oven.service';

describe('OvenService', () => {
  let service: OvenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OvenService],
    }).compile();

    service = module.get<OvenService>(OvenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
