import { Component } from '@angular/core'
 
@Component({
    selector: ' app-body',
    templateUrl: './body.component.html'
})


export class BodyComponent {

    mostrar = true;
    frase: any = {
        mensaje:' Morir o vivir que sentido tiene sin el placer de luchar',
        autor:' H-Luis ',
        name: ' <h1> hola </h1>'
    };

    personajes: string[]= ['zoro','Nami','Luffy'];

}