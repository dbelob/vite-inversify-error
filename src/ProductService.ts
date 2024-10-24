import { inject, injectable } from 'inversify';
import { MessageService } from './MessageService.ts';

@injectable()
export class ProductService {
    @inject(MessageService)
    private readonly messageService!: MessageService;

    getProductWithMessage() {
        return `Product with message "${this.messageService.getMessage()}"`;
    }
}
