import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit{

  movie:movie = new movie();
  actortemp:string="";
  constructor(private mvservice:MovieService, private location:Location){}
  ngOnInit(){
    this.movie.actors=[];
  }
  addActor(){ 
    if(this.actortemp !==""){
    this.movie.actors.push(this.actortemp);
    this.actortemp='';
    
    }
  }
  saveMovie(){
    this.mvservice.addMovie(this.movie).subscribe(res=>console.log(res));
    this.location.back();
  }
}
