import { Component } from 'react';
import { resolve } from 'inversify-react';
import { MessageService } from './MessageService.ts';
import { ProductService } from './ProductService.ts';

export default class ClassComponent extends Component {
    @resolve(MessageService)
    private readonly messageService!: MessageService;

    @resolve(ProductService)
    private readonly productService!: ProductService;

    render() {
        return (
            <>
                Class component:
                <ul>
                    <li>{this.messageService.getMessage()}</li>
                    <li>{this.productService.getProductWithMessage()}</li>
                </ul>
            </>
        );
    }
}
