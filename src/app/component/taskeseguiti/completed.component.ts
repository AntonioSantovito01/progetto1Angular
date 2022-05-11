import { Component, OnInit } from '@angular/core';
import { arrayValori2, get2 } from '../service/service.service';
import { Todo } from 'src/app/interface/todo';



@Component({
  selector: 'app-taskeseguiti',
  template: `<div class="container text-center">
    <div class="accordion mt-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header text-success" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Task completati
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <h6 class="text-start" scope="col" *ngFor="let i of completato" >{{i.title}}: <span>completato alle ore: ({{date}}</span></h6>
      </div>
    </div>
  </div>
</div>



<!--  <table class="table">
  <thead>
    <tr>
      <th scope="col">Task</th>
    </tr>
  </thead>
  <tbody>
    <tr scope="col" *ngFor="let i of completato" >{{i.title}}</tr>
  </tbody>
</table> -->
  </div>`,
  styleUrls: ['./completed.component.scss']
})

export class TaskeseguitiComponent implements OnInit {
  completato: Todo[] = [];
  date: Date = new Date();

  constructor() {
    get2().then((risposta) => {
      this.completato = risposta;
      console.log(this.completato)
    })

  }

  ngOnInit(): void {
  }

}
