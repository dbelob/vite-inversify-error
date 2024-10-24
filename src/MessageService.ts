import { injectable } from 'inversify';

@injectable()
export class MessageService {
    getMessage() {
        return 'Hello, world!';
    }
}
