import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  msg1: Message[]=[];
  ngOnInit(): void {
    this.msg1=[
      {severity:'success', summary:'hi', detail:'No more...'}
    ]
  }
  title = 'ecommerce';
}
