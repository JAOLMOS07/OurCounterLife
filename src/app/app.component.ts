import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { SwiperComponent } from "./swiper/swiper.component";
import { ImagesComponent } from "./images/images.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ImagesComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
