import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from 'src/app/core/services/users/users.service';
import { User } from 'src/app/models/user';
import { SortByType } from 'src/app/core/pipes/sortBy/sort-by.pipe';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  userList$: Observable<User[]> = new Observable()
  orderBy: SortByType = SortByType.ASC

  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit() {
    this.userList$ = this.userService.getUserList()
  }
}
