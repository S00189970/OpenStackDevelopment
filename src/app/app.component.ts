import { Component, OnInit } from '@angular/core';
import { FirebaseApiService } from './firebase-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // title = 'firebase-sf-app';

 MyBooks: any =[];
 titleValue='';
 authorValue='';

 constructor(public firebaseApiService: FirebaseApiService){

 }

 ngOnInit(): void {
     this.loadBooks();
 }

 loadBooks(){
   return this.firebaseApiService.getBooks().subscribe((data: {}) =>{
     this.MyBooks = data;
   })
 }
}
