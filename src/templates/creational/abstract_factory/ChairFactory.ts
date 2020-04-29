export class ChairFactory {
    static get ArtDeco() {
        return 0;
    }

    static get Victorian() {
        return 1;
    }


    static get Modern() {
        return 2;
    }

    getChair(style) {
        switch (style) {
            case ChairFactory.ArtDeco:
                return new chairArtDeco();
            
            case ChairFactory.Victorian:
                return new chairVictorian();                
            
            case ChairFactory.Modern:
                return new chairModern();               
            
            default:
                throw new Error('Sorry, chair style is not recognized');
        }
    }
}


class chairStyle {
    info: string;

    constructor(info) {
        this.info = info;
    }

    furnitureHello() {
        return `it's ${ this.info }`;
    }
}

class chairArtDeco extends chairStyle {
    constructor() {
        super('ArtDeco chair');
    }
}


class chairVictorian extends chairStyle {
    constructor() {
        super('Victorian chair');
    }
}

class chairModern extends chairStyle {
    constructor() {
        super('Modern chair');
    }
}