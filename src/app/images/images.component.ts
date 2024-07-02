import { Component } from "@angular/core";
import { register } from "swiper/element/bundle";
import { SwiperComponent } from "../swiper/swiper.component";
@Component({
  selector: "app-images",
  standalone: true,
  imports: [SwiperComponent],
  templateUrl: "./images.component.html",
  styleUrl: "./images.component.css",
})
export class ImagesComponent {}
