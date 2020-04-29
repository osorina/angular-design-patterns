export class SofaFactory {
    static get ArtDeco() {
        return 0;
    }

    static get Victorian() {
        return 1;
    }


    static get Modern() {
        return 2;
    }

    getSofa(style) {
        switch (style) {
            case SofaFactory.ArtDeco:
                return new sofaArtDeco();
            
            case SofaFactory.Victorian:
                return new sofaVictorian();                
            
            case SofaFactory.Modern:
                return new sofaModern();               
            
            default:
                throw new Error('Sorry, sofa style is not recognized');
        }
    }
}


class sofaStyle {
    info: string;

    constructor(info) {
        this.info = info;
    }

    furnitureHello() {
        return `it's ${ this.info }`;
    }
}

class sofaArtDeco extends sofaStyle {
    constructor() {
        super('ArtDeco sofa');
    }
}


class sofaVictorian extends sofaStyle {
    constructor() {
        super('Victorian sofa');
    }
}

class sofaModern extends sofaStyle {
    constructor() {
        super('Modern sofa');
    }
}