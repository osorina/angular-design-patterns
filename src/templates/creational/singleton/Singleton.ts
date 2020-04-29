export class Singleton {
    private static instance: Singleton;

    constructor(param1: string, param2: number) {
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton('BLA', 1234);
        }

        return Singleton.instance;
    }
}