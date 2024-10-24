import { Component } from 'react';
import { resolve } from 'inversify-react';
import { MessageService } from './MessageService.ts';

export default class ClassComponent extends Component {
    @resolve(MessageService)
    private readonly messageService!: MessageService;

    render() {
        return (
            <>
                Class component {this.messageService.getMessage()}
            </>
        );
    }
}
