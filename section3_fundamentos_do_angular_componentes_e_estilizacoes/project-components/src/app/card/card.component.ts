import { Component } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  plano : IPlano = {
    infos : {
      tipo: 'Básico',
      preco: 100.99
    }
  }

}
