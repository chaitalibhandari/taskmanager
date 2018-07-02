import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './app/tasks/tasks.component';
import { TaskViewComponent } from './app/task-view/task-view.component';
import { AddTaskComponent } from './app/add-task/add-task.component';

const appRoutes:Routes=[

  { path:'', component:TasksComponent },
  { path:'tasks/:id', component:TaskViewComponent },
  { path: 'edit/:id',component: AddTaskComponent },
  { path: 'new',component: AddTaskComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
