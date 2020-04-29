export class TableFactory {
    static get ArtDeco() {
        return 0;
    }

    static get Victorian() {
        return 1;
    }


    static get Modern() {
        return 2;
    }

    getTable(style) {
        switch (style) {
            case TableFactory.ArtDeco:
                return new tableArtDeco();
            
            case TableFactory.Victorian:
                return new tableVictorian();                
            
            case TableFactory.Modern:
                return new tableModern();               
            
            default:
                throw new Error('Sorry, table style is not recognized');
        }
    }
}


class tableStyle {
    info: string;

    constructor(info) {
        this.info = info;
    }

    furnitureHello() {
        return `it's ${ this.info }`;
    }
}

class tableArtDeco extends tableStyle {
    constructor() {
        super('ArtDeco table');
    }
}


class tableVictorian extends tableStyle {
    constructor() {
        super('Victorian table');
    }
}

class tableModern extends tableStyle {
    constructor() {
        super('Modern table');
    }
}