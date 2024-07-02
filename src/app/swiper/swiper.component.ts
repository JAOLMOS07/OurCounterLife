import { SwiperOptions } from "./../../../node_modules/swiper/types/swiper-options.d";
import { CommonModule } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from "@angular/core";
import { SwiperContainer, register } from "swiper/element/bundle";
register();
@Component({
  selector: "app-swiper",
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <swiper-container init="false">
      <swiper-slide
        ><div><img src="../../assets/img1.png" alt="img1" /></div
      ></swiper-slide>
      <swiper-slide
        ><div><img src="../../assets/img2.png" alt="img2" /></div
      ></swiper-slide>
      <swiper-slide
        ><div><img src="../../assets/img3.png" alt="img3" /></div
      ></swiper-slide>
    </swiper-container>
  `,
  styleUrl: "./swiper.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperComponent implements OnInit {
  swiperElement = signal<SwiperContainer | null>(null);
  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector("swiper-container");
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElement.set(swiperElemConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
