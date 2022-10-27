import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/shared/model/todo.model';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.scss'],
})
export class UserTodosComponent implements OnInit {
  @Input() todo!: ITodo;

  constructor() {}

  ngOnInit(): void {}
}
