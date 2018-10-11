import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit  {
  pageTitle: string = "Joe's Bike Shop";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  
//   _listFilter: string = 'mens';
//   get listFilter(): string{
//     return this._listFilter;
//   }
//   set listFilter(value: string){
// this._listFilter = value;
// this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
//   }

  filter = {mens: true, womens: true, kids: true};
  filteredProducts: IProduct[];

  products: IProduct[] = [
    {
      'bikeId': 1,
      'bikeName': 'MTB bike',
      'bikeCode': 'MTB-0020',
      'releaseDate': 'March 18, 2016',
      'description': 'Mens 29 inch mountain bike',
      'category': 'mens',
      'price': 532.99,
      'starRating': 4.2,
      'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177215/bike-mountain.png'
    },
    {
      'bikeId': 2,
      'bikeName': 'MTB bike',
      'bikeCode': 'MTB-0030',
      'releaseDate': 'June 15, 2017',
      'description': 'Womans 27 inch mountain bike',
      'category': 'womens',
      'price': 515.99,
      'starRating': 4.5,
      'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177215/bike-mountain.png'
    },
    {
      'bikeId': 3,
      'bikeName': 'Sports bike',
      'bikeCode': 'SB-1020',
      'releaseDate': 'May 9, 2016',
      'description': 'Mens Sports Bike',
      'category': 'mens',
      'price': 1099.99,
      'starRating': 4.8,
      'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177216/bike-sport.png'
    },
    {
      'bikeId': 4,
      'bikeName': 'Kids bike',
      'bikeCode': 'KB-3045',
      'releaseDate': 'October 28, 2016',
      'description': 'Kids bike with stabalizers',
      'category': 'kids',
      'price': 250.00,
      'starRating': 4.4,
      'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177214/bike-kid.png'
    },
    {
      'bikeId': 5,
      'bikeName': 'Ladies bike',
      'bikeCode': 'LB-4060',
      'releaseDate': 'March 10, 2016',
      'description': 'Ladies touring bike',
      'category': 'womens',
      'price': 450.00,
      'starRating': 4.9,
      'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177213/bike-female.png'
    },
    {
      'bikeId': 6,
      'bikeName': 'Kids blue bike',
      'bikeCode': 'KB-3075',
      'releaseDate': 'June 28, 2016',
      'description': 'Kids blue bike with stabalizers',
      'category': 'kids',
      'price': 290.00,
      'starRating': 4.8,
      'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177214/bike-kid.png'
    }
  ];
  constructor() {
    this.filteredProducts = this.products;
   }

  toggleImage():void{
    this.showImage = !this.showImage;
  }

  ngOnInit() {
  }

  // performFilter(filterBy: string): IProduct[]{
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.products.filter((product: IProduct) =>
  //   product.bikeName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  // }

  filterChange(){
    this.filteredProducts = this.products.filter(x =>
      (x.category === 'kids' && this.filter.kids) ||
      (x.category === 'mens' && this.filter.mens) ||
      (x.category === 'womens' && this.filter.womens)
      );
  }
  onNotify(message: string): void{
console.log(message);

  }



}




