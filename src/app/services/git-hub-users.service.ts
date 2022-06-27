import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserDetails } from '../models';
@Injectable({
  providedIn: 'root',
})
export class GitHubUsersService {
  baseurl: string = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getAllUsers(pageNumber: number, perPage: number): Observable<User[]> {
    const url = `${this.baseurl}/users?page=${pageNumber}&per_page=${perPage}`;
    return this.http.get<User[]>(url);
  }

  getUser(username: string): Observable<UserDetails> {
    const url = `${this.baseurl}/users/${username}`;
    return this.http.get<UserDetails>(url);
  }
}
