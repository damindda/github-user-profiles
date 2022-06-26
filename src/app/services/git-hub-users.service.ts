import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserDetails } from '../models/user-details';
@Injectable({
  providedIn: 'root'
})
export class GitHubUsersService {

  baseurl = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    const count = 10;
    const page = 1;
    const url = `${this.baseurl}/users?page=${page}&per_page=${count}`;
    return this.http.get<User[]>(url);
  }

  getUser(username: string): Observable<UserDetails> {
    const url = `${this.baseurl}/users/${username}`;
    console.log(url);
    return this.http.get<UserDetails>(url);
  }
}
