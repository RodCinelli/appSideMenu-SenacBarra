import { Component, OnInit } from '@angular/core';
import { getStorage, ref, listAll, Storage, getDownloadURL} from '@angular/fire/storage';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  images:any=[]
  constructor(private storage:Storage) { }

  ngOnInit() {
    this.listarProdutos()
  }

  listarProdutos() {
    const listRef = ref(this.storage, 'Produtos');
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef)
            .then((url) => {
              this.images.push(url);
            })
            .catch((error) => {
              
            });
        });
      })
    }
  }


