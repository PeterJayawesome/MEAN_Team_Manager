import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from './../../players.service';
import { Player } from './../../player';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerStatusComponent implements OnInit {
	game:Number;
	players:[Player]
  constructor(private _route: ActivatedRoute,private _playerService: PlayersService) { 
  	this._route.paramMap.subscribe(params=>{
  		console.log(params);
  		console.log(params.get('id'));
  		this.game = parseInt(params.get('id'));
  		this._playerService.retrievePlayers(res=>{this.players = res});
  	})
  }

  ngOnInit() {
  }

  changeStatus(id,status){
  	this._playerService.changeStatus(this.game,id,status,(res)=>{this.players = res});
  }

}
