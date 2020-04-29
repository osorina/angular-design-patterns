export class PC {
    private motherboard: string;
    private cpu: string;
    private ssd: string;

    /* motherboard */
    public getMotherboard() {
        return this.motherboard;
    }

    public setMotherboard(mb: string) {
        this.motherboard = mb;
    }

    /* cpu */
    public getCpu() {
        return this.cpu;
    }

    public setCpu(cpu: string) {
        this.cpu = cpu;
    }

    /* ssd */
    public getSsd() {
        return this.ssd;
    }

    public setSsd(ssd: string) {
        this.ssd = ssd;
    }   

    toString(): string {
        return  `Motherboard - ${ this.motherboard }, CPU - ${ this.cpu }, SSD - ${ this.ssd }`;
    }     
}