import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuType: string = 'out';
  userName:string='';
  constructor(private router: Router) {}
  ngOnInit(): void {
    // this.router.events.subscribe((val: any) => {
    //   if (val.url) {
    //     if (localStorage.getItem('admin') && val.url.includes('admin-home')) {
    //       this.menuType = 'admin';
    //       let adminStore=localStorage.getItem('admin');
    //       let adminData=adminStore && JSON.parse(adminStore)[0];
    //       this.userName=adminData.name
    //     } else if (localStorage.getItem('user') && val.url.includes('')) {
    //       this.menuType = 'user';
    //       let userStore=localStorage.getItem('user')
    //       let userData=userStore && JSON.parse(userStore)[0];
    //       this.userName=userData.firstName
    //     } else {
    //       this.menuType = 'out';
    //     }
    //   }
    // });
  }
  logout(){
    localStorage.removeItem('admin')
    this.router.navigate(['/'])
  }
}
