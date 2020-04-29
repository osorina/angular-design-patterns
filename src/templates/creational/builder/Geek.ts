import { PCBuilder } from './PCBuilder';
import { PC } from './PC';

export class Geek implements PCBuilder {
    private pc = new PC();

    assemblePC(): string {
        return this.pc.toString();
    }

    setMotherboard(mb: string): void {
        this.pc.setMotherboard(mb);
    }

    setCpu(cpu: string): void {
        this.pc.setCpu(cpu);
    }

    setSsd(ssd: string): void {
        this.pc.setSsd(ssd);
    }
}