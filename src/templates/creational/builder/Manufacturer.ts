import { PCBuilder } from './PCBuilder';

export class Manufacturer {
    public static manufacturer(builder: PCBuilder): string {
        builder.setMotherboard('ASUS Motherboard');
        builder.setCpu('CPU');
        builder.setSsd('SSD');

        return builder.assemblePC();
    }
}