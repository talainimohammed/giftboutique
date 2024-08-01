import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsComponent } from './components/products/products.component';
import { CardComponent } from './components/products/card/card.component';
import { CardsService } from './services/cards.service';
import { BasketitemscountService } from './services/basketitemscount.service';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { basketReducer } from './basket/basket.reducer';
import { BasketComponent } from './components/basket/basket.component';
import { BasketcardComponent } from './components/basket/basketcard/basketcard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CardComponent,
    BasketComponent,
    BasketcardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchPipe,
    FormsModule,
    StoreModule.forRoot({ basket: basketReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    CardsService,
    BasketitemscountService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
