export interface PCBuilder {
    assemblePC(): string;
    setMotherboard(mb: string): void;
    setCpu(cpu: string): void;
    setSsd(ssd: string): void;
}