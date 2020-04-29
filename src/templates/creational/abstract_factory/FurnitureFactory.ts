import { ChairFactory } from './ChairFactory';
import { SofaFactory } from './SofaFactory';
import { TableFactory } from './TableFactory';

export class FurnitureFactory {
    static get ChairFactory() {
        return 0;
    }
    
    static get SofaFactory() {
        return 1;
    }
    
    static get TableFactory() {
        return 2;
    }

    static getFurnitureFactory(label) {
        switch (label) {
            case FurnitureFactory.ChairFactory:
                return new ChairFactory();

            case FurnitureFactory.SofaFactory:
                return  new SofaFactory();

            case FurnitureFactory.TableFactory:
                return new TableFactory();
            
            default:
                throw new Error('Sorry, the type of furniture is not recognized');
        }
    }
}