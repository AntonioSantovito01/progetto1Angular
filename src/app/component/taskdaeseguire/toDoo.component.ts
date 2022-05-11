import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import { arrayValori2 } from '../service/service.service';
import { aggiungi, get, } from '../service/service.service';



@Component({
  selector: 'app-taskdaeseguire',
  template: `
  <div class="container">
  <input class="form-control w-50 mt-5" type="text" [(ngModel)]="visualizza" placeholder="Task Da Eseguire">
  <button class="btn btn-primary my-3" (click)="prendiValore(visualizza)">Aggiungi Task</button>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Task</th>
    </tr>
  </thead>
  <tbody>
    <ng-container *ngFor="let i of arrayValori; let a = index"><tr scope="col" *ngIf="i.completed == false" > {{i.title}}  <button class="btn btn-dark my-3"(click)="completaTask(a,i)">✅</button></tr></ng-container>
  </tbody>
</table>
  `
  ,
  styleUrls: ['./toDoo.component.scss']
})


export class TaskdaeseguireComponent implements OnInit {

  visualizza: string | undefined;
  arrayValori: Todo[] = [];
  arrayCompletati: Todo[] = [];
  date: Date = new Date();

  constructor() {
    get().then(risposta => {
      this.arrayValori = risposta;
    })
  }


  prendiValore(pippo: any) {
    this.arrayValori.push({ id: this.arrayValori.length, title: pippo, completed: false, date: this.date })
  }


  completaTask(id: number, ele: Todo) {
    aggiungi(ele, id).then(() => {
      this.arrayValori = this.arrayValori.filter((ele, i) => i !== id);
      this.arrayCompletati.push(ele)
    })
  }


  ngOnInit(): void {

  }
}

