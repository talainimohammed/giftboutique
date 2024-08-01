import { Component, Input } from '@angular/core';
import { Card } from '../../../models/card';

@Component({
  selector: 'app-basketcard',
  templateUrl: './basketcard.component.html',
  styleUrl: './basketcard.component.css'
})
export class BasketcardComponent {

 @Input() card:Card={id: 0, name: '', price: 0, description: '', image: '', quantity: 0};

}
