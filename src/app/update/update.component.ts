import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie.modal';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  imdbId:number;
  movie:Movie;
  constructor(private activatedroute:ActivatedRoute,private movieService:MovieService,private router:Router) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(params =>{
      this.imdbId=params['imdbId'];
      console.log(this.imdbId);
    })
  }
  updateComment(comment:string){
    this.movie=new Movie();
    this.movie.comment=comment;
    this.movie.imdbId=this.imdbId;
    this.movieService.updateMovie(this.imdbId,this.movie).subscribe(data => {
      console.log("Successfully Updated");
      this.router.navigate(["/Wish-List"]);
    })
  }

}
