  import { Component } from "@angular/core";
import { ToastService } from './app/toast.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "my-app";
  
  constructor(public toastService: ToastService){}
}
