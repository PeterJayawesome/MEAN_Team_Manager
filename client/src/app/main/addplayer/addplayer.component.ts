import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Player } from './../../player';
import { PlayersService } from './../../players.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddplayerComponent implements OnInit {
	player:Player = new Player('','');
  constructor(private playerService:PlayersService) { }

  ngOnInit() {
  }

  OnSubmit(){
  	this.playerService.add(this.player,(res)=>{
  		console.log(res);
  		this.player = new Player('','');
	})
  }

}
