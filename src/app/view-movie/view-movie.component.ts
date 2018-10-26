import { Component, OnInit,Input } from '@angular/core';
import { Movie } from '../movie.modal';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  constructor(private movieservice:MovieService,private router:Router) { }

  addMovie:Movie;
  ngOnInit() {
  }
  @Input('movieList') movieList;

  addToWishList(movie){
    this.addMovie=new Movie();
    this.addMovie.imdbId=movie.id;
    this.addMovie.movieTitle=movie.title;
    this.addMovie.imgurl=movie.poster_path;

    this.addMovie.comment=movie.overview;
    this.addMovie.rating=movie.vote_average;
    this.addMovie.yearOfRelease=movie.release_date;

    this.movieservice.addMovie(this.addMovie).subscribe(data =>{
      console.log("Succesfully added to Wish-List");
      this.router.navigate(["/Wish-List"]);
    })

  }

}
