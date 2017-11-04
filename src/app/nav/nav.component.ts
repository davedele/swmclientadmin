import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import * as config from "../config/config";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  model: { leftNav: any[] };
  collapsed: false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.model = {
      leftNav: [
        { target: "", name: "Dashboard" },
        { target: "pages", name: "Pages" }
      ]
    };
    this.getNav();
  }

  getNav() {
    const params = new HttpParams().set("siteId", "1");
    console.log(
      `${config.default
        .apiUrl}/ajaxProxy.cfc?method=clientAdmin:modules.getModules`
    );
    this.http
      .get(`${config.default.apiUrl}/ajaxProxy.cfc?method=modules.getModules`, {
        withCredentials: true,
        params: params
      })
      .subscribe(
        val => {
          this.model.leftNav.push(val);
        },
        error =>
          this.model.leftNav.push({
            target: "modules/students",
            name: "Students"
          })
      );
  }
}
