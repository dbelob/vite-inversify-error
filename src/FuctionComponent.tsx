import { useInjection } from 'inversify-react';
import { MessageService } from './MessageService.ts';

export default function FuctionComponent() {
    const messageService = useInjection(MessageService);

    return (
        <>
            Fuction component: {messageService.getMessage()}
        </>
    );
}
