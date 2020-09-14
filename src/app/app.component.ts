import { Component } from '@angular/core';
import { MovieService } from './providers/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-app';

  // products: any = [];
  movies: any = [];

  constructor(private service: MovieService) { }

  ngOnInit() {
    // this.service.getData().subscribe((data: any) => {
    //   console.log(data);
    //   this.products = data;
    //   console.log(this.products.length);
    // });

    this.service.getMovieData().subscribe((dataM: any) => {
      // console.log(data);
      this.movies = dataM;
      // console.log("Movies: "+this.movies.length);
    });

  }

}
