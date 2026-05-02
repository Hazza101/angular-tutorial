import { Component } from "@angular/core";

@Component({
  selector: "home",
  imports: [],
  template: ` <h1>home</h1> `,
  styleUrls: [],
})
export class Home {}

@Component({
  selector: "app-root",
  imports: [Home],
  template: ` <ul>
    <li><home /></li>
  </ul>`,
  styleUrls: ["./app.css"],
})
export class App {
  title = "default";
}
