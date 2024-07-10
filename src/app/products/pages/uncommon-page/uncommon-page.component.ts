import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
})
export class UncommonPageComponent {
  public gender: "male" | "female" = "male";

  public clients: string[] = ["Arthur", "Miranda", "Jhon", "Robert", "Chris"];

  public inviteMap = {
    male: "Invite him",
    female: "Invite her"
  };

  public clientsMap = {
    "=0": "There are no clients waiting",
    "=1": "There is # client waiting",
    "other": "There are # clients waiting",
  };

  changeGender() {
    this.gender = this.gender === "male" ? "female" : "male";
  }

  deleteClients(){
    this.clients.shift();
  }
  addClients(){
    this.clients.push("new client")
  }
  //keyValue

  public person = {
    name: "Keyla",
    age: "38",
    adress: "Toronto, canada",
  }

  public myObservableTimer: Observable<number> = interval(2000)
  .pipe(
    tap(value => console.log("tap", value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Theres data in the promise.' );
      console.log( 'Theres data in the promise.' );
      this.person.name = 'Other Name'
    }, 3500);
  })
}
