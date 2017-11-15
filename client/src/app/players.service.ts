import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';

@Injectable()
export class PlayersService {
	
	players:[Player];

  constructor(private _http:Http) { }

  retrievePlayers(callback){
  	this._http.get('/players').subscribe(
  	(res)=>{
  		console.log(res.json());
  		callback(res.json());
  	},
  	(err)=>{
  		console.log(err);
  	})
  }

  delete(id,callback){
  	this._http.delete('/players/'+id).subscribe(
  		(res)=>{
  			console.log(res.json());
  			callback(res.json());
  		},
  		(err)=>{
  			console.log(err);
  		}
  	)
  }

  add(player,callback){
  	console.log(player);
  	this._http.post('/players',player).subscribe(
  		(res)=>{
  			callback(res);
  		},
  		(err)=>{
  			console.log(err);
  		}
  	)
  }

  changeStatus(game,id,status,callback){
  	this._http.put('/players/'+id+'/'+game,{status: status}).subscribe(
  		(res)=>{
  			console.log(res.json());
  			callback(res.json());
  		}
  		(err)=>{
  			console.log(err);
  		}
  	)
  }



}
