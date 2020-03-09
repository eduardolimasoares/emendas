import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Emendas } from './shared/emenda.model';
import emendasBd from './dados/emendasBd.json';

export class InMemoryDatabase implements InMemoryDbService {

    createDb() {
        const emendas: Emendas[] = emendasBd;
        return { emendas };
    }
}
