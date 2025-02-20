import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageGifComponent } from './pages/home-page-gif/home-page-gif.component';
import { GifSearchBoxComponent } from './components/gif-search-box/gif-search-box.component';
import { CardListGifComponent } from './components/card-list-gif/card-list-gif.component';
import { CardGifComponent } from './components/card-list-gif/card-gif/card-gif.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageGifComponent,
    GifSearchBoxComponent,
    CardListGifComponent,
    CardGifComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageGifComponent
  ]
})
export class GifsModule { }
