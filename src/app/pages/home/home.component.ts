import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/core/services/ProductServices/product.service';
import { Product } from 'src/app/data/interfaces/product';
import { environment } from 'src/environments/environment';
import { DetailModalComponent } from './detail-modal/detail-modal/detail-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  searchText: string = "";
  title: string = "";

  @ViewChild('detailModal') detailModal?: DetailModalComponent;


  private readonly apiURL = environment.apiURL;
  constructor(private readonly productService: ProductService) { }


  ngOnInit(): void {
    console.log('home init')

    this.productService.get().subscribe((data: Product[]) => {

      for (let i = 0; i < data.length; i++) {
        this.productService.getById(data[i].id).subscribe((info: Product) => {
          info.id = data[i].id;
          // Too lazy to modify the DB to also have an image field so the image of the products will be random
          if (!info.img) {
            var pepes = [
              'https://preview.redd.it/lfh1a8x18wz41.jpg?auto=webp&s=08522b923c79e70ebd476f6cad26985ae6d884a1',
              'https://i.pinimg.com/736x/14/1f/0c/141f0c0ee298388c5a44baff34b76d0f.jpg',
              'https://digirare.com/storage/rare-pepe/PEPEBASS.png',
              'https://i.pinimg.com/originals/98/33/b9/9833b9e2e8292bcf175b7ae7d66adaf0.png',
              'https://i.pinimg.com/originals/3f/50/43/3f504397bf5e0478315bc15aaf6736e5.jpg',
              'https://pepethefrog.ucoz.com/_nw/4/63043001.jpg',
              'https://static-cdn.jtvnw.net/emoticons/v1/301212974/3.0',
              'https://i.redd.it/9mza4paxvhz31.jpg',
              'https://media.tenor.com/images/2e72f7bb374e958a7e49f37033b50555/tenor.png',
              'https://i.pinimg.com/originals/a4/d9/74/a4d974c5838f3f1766398f67c4888329.jpg'
            ]
            info.img = pepes[Math.floor(Math.random() * 10)];
          }

          this.products.push(info);
        },
          (e: Error) => {
            console.log('err', e);
          });
      }
    },
      (er: Error) => {
        console.log('err', er);
      });
    // let userId = "3fa85f74-5717-4562-b3fc-2c963f66afa6";
    // this.userService.getById(userId).subscribe((data: User) => {
    //   console.log('Student from api: ', data)
    //   this.user = data;
    // });

    // this.httpClient.get<User>(`${this.apiURL}/User/${userId}`).subscribe((data: User) => {
    //   console.log('Student from api: ', data)
    //   this.user = data;
    // });
    // const headers = new HttpHeaders ({
    //   'Content-Type': 'application/json',
    //   'id':  "3fa85f74-5717-4562-b3fc-2c963f66afa6"
    // });

    // For FromForm
    // const formData = new FormData();
    // formData.append('id', '3fa85f23-5717-4562-b3fc-2c963f66afa6');
    // formData.append('name', 'nnnnnnnnnnnnnnn');
    // formData.append('username', 'uuuuuuuuuuuuuuuuu');
    // formData.append('password', 'ppppppppp6');
    // formData.append('phoneNumber', 'pnpnpnpnpn');
    // formData.append('email', 'eeeeeeeee');

    // Post with FromForm
    // this.httpClient.post<User>(`${this.apiURL}/User`,formData).subscribe( data => {
    //   console.log('Works');
    // });



    // const formData2 = new FormData();
    // formData2.append('id', '3fa85f23-5717-4562-b3fc-2c963f66afa6');
    // formData2.append('name', 'asdads');
    // formData2.append('username', 'asdasd');
    // formData2.append('password', 'wrtewtr');
    // formData2.append('phoneNumber', 'rttr');
    // formData2.append('email', 'asdsdaa');

    // this.httpClient.put<User>(`${this.apiURL}/User`, formData2).subscribe( data => {
    //   console.log('Works');
    // });

  }

  ngOnDestroy(): void {
    console.log('home destroyed')
  }


  showDM(id: string): void {
    this.detailModal?.show(id);
  }

}
