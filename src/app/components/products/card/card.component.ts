import { Component, Input } from '@angular/core';
import { Card } from '../../../models/card';
@Component({
  selector: 'app-card',
  //standalone: true,
  //imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() card: Card={id: 0, name: '', price: 0, description: '', image: '', quantity: 0};

}
