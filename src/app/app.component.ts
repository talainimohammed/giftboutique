import { Component } from '@angular/core';
import { BasketitemscountService } from './services/basketitemscount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Card Haven';
  nbbasketitems: number = 0;
  constructor(private basketitemscountService:BasketitemscountService) {}

  ngOnInit() {
    this.basketitemscountService.basketCount$.subscribe(
      count => this.nbbasketitems = count);
  }
}
