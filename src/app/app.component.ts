import { Component, OnInit } from '@angular/core';

/*abstract_factory*/
import { FurnitureFactory } from '../templates/creational/abstract_factory/FurnitureFactory';
import { SofaFactory } from '../templates/creational/abstract_factory/SofaFactory';


/*builder*/
import { Manufacturer } from '../templates/creational/builder/Manufacturer';
import { Geek } from '../templates/creational/builder/Geek';


/*prototype*/
import { Sheep } from '../templates/creational/prototype/Sheep';

/*singleton*/
import { Singleton } from '../templates/creational/singleton/Singleton';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
    title = 'Desing Patterns';

    abstract_factory: string;
    builder: string;
    prototype: string;
    singleton: string;

    ngOnInit(): void {
        /*abstract_factory*/
        const sofaFactory   = <SofaFactory> FurnitureFactory.getFurnitureFactory(FurnitureFactory.SofaFactory);
        const victorianSofa = sofaFactory.getSofa(SofaFactory.Victorian);
        this.abstract_factory = victorianSofa.furnitureHello();

        /*builder*/
         const geek: Geek = new Geek();
         const pc: string = Manufacturer.manufacturer(geek);
         this.builder = pc;

        /*prototype*/
        const sheep: Sheep = new Sheep('Molly', 'black');
        const cloneSheep = sheep.clone();
        this.prototype = cloneSheep.getColor() + ' ' + cloneSheep.getName();

        /*singleton*/
        const singleton = Singleton.getInstance();
        const singleton2 = Singleton.getInstance();

        this.singleton = (singleton === singleton2).toString();
    }
}
