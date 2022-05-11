import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TaskdaeseguireComponent } from './component/taskdaeseguire/toDoo.component';
import { TaskeseguitiComponent } from './component/taskeseguiti/completed.component';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [

  {
    path: 'Task-Da-Eseguire',
    component: TaskdaeseguireComponent
  },
  {
    path: 'Task-Eseguiti',
    component: TaskeseguitiComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskdaeseguireComponent,
    TaskeseguitiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
