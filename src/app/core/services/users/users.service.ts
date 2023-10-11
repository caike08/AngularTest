import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  timeout,
  catchError,
  retry,
  map
} from 'rxjs/operators';

import { environment } from 'src/environment/environment';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userList: Array<any> = []

  constructor(
    private http: HttpClient,
  ) { }

  getUserList: () => Observable<User[]> = () => {
    let observable: Observable<any>

    if (this.userList.length > 0) {
      observable = of(this.userList)
    } else {
      observable = this.http.get(environment.baseUrl)
    }

    return observable.pipe(
      map((result: User[]) => {
        return this.userList = result
      }),
      retry(3),
      timeout(3000),
      catchError((error: Error) => {
        throw new Error('Something went wrong! Details: ' + error.message)
      })
    )
  }
}
