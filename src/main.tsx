import 'reflect-metadata';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Container } from 'inversify';
import { Provider } from 'inversify-react';
import './index.css'
import App from './App.tsx'
import { MessageService } from './MessageService.ts';
import { ProductService } from './ProductService.ts';

const iocContainer = new Container({skipBaseClassChecks: true});
iocContainer.bind(MessageService).toSelf().inSingletonScope();
iocContainer.bind(ProductService).toSelf().inSingletonScope();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider container={iocContainer}>
            <App/>
        </Provider>
    </StrictMode>,
)
