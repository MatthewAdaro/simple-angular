import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  data$: Observable<any[]> = new Observable<any[]>();

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  back(): void {
    this.router.navigate(['/']);
  }

  fetchData() {
    this.data$ = this.http.get<any[]>('https://fakestoreapi.com/products');
  }
}
