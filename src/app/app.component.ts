import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Produtos', url: '/folder/produtos', icon: 'bag-handle' },
    { title: 'Promoções', url: '/folder/promoçoes', icon: 'pricetags' },
    { title: 'Lojas', url: '/folder/lojas', icon: 'storefront' },
    { title: 'Perfil', url: '/folder/perfil', icon: 'person-circle' },
    { title: 'Contato', url: '/folder/contato', icon: 'call' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
