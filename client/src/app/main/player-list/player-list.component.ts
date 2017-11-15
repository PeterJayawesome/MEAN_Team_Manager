import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayersService } from './../../players.service';
import { Player } from './../../player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerListComponent implements OnInit {
	
	players: [Player];

  constructor(private _playerService:PlayersService) { 
  }

  ngOnInit() {
  	this._playerService.retrievePlayers(res=>{this.players = res});
  }

  deleteplayer(id){
  	this._playerService.delete(id,(res)=>{this.players = res});
  }

}
