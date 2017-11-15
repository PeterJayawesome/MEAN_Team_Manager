import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddplayerComponent } from './main/addplayer/addplayer.component'
import { PlayerListComponent } from './main/player-list/player-list.component'
import { PlayerStatusComponent } from './main/player-status/player-status.component';

const routes: Routes = [
	{path:"players/list",pathMatch:'full',component: PlayerListComponent},
	{path:"players/addplayer",pathMatch:'full',component: AddplayerComponent},
	{path:"status/game/:id",pathMatch:'full',component: PlayerStatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
