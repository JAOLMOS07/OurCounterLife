import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  standalone: true,
  imports: [],
  templateUrl: "./counter.component.html",
  styleUrl: "./counter.component.css",
})
export class CounterComponent {
  startDate: Date = new Date("2020-11-01T00:00:00"); // fecha de inicio de la relación
  years!: number;
  months!: number;
  weeks!: number;
  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;

  ngOnInit(): void {
    setInterval(() => {
      const now = new Date();
      const elapsed = now.getTime() - this.startDate.getTime();

      this.seconds = Math.floor(elapsed / 1000);
      this.minutes = Math.floor(this.seconds / 60);
      this.hours = Math.floor(this.minutes / 60);
      this.days = Math.floor(this.hours / 24);
      this.weeks = Math.floor(this.days / 7);
      this.months = Math.floor(this.weeks / 4); // promedio de semanas en un mes
      this.years = Math.floor(this.months / 12);

      this.months %= 12;
      this.weeks %= 4;
      this.days %= 7;
      this.hours %= 24;
      this.minutes %= 60;
      this.seconds %= 60;
    }, 1000);
  }
}
