import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PlayerStatusComponent } from './main/player-status/player-status.component';
import { PlayerListComponent } from './main/player-list/player-list.component';
import { AddplayerComponent } from './main/addplayer/addplayer.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlayersService } from './players.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlayerStatusComponent,
    PlayerListComponent,
    AddplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
