import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from './shared/products.service';
import { Products } from './shared/products.model';
import { DashboardService } from '../../services/dashboard.service';
import { fetchedCategory } from '../../models/category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  allCategoryList: any;
  
  constructor(public productService: ProductsService ,public dashBoardService :DashboardService) {
    this.getCategory();
  }
  selectedCategoryForProduct ="select category";

   ngOnInit(){
    this.resetForm();
    // this.getCategory();
    this.refreshProductList();
    console.log(this.allCategoryList);
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.productService.selectedProduct = {
      _id: '',
      name: '',
      description: '',
      category: '',
    };
  }

  getCategory() {
    this.dashBoardService.getCategory().subscribe(
      (res) => {
        this.allCategoryList = res as fetchedCategory;
        this.dashBoardService.categoryList = res as fetchedCategory;
        console.log(this.allCategoryList);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit(form: NgForm) {
    if (form.value._id == '') {
      this.productService.postProducts(form.value).subscribe((res) => {
        this.resetForm(form);
      });
      this.refreshProductList();
    } else {
      console.log('in on update');
      this.productService.putProducts(form.value).subscribe((res) => {
        this.resetForm(form);
        console.log('in on update sucees');
      });
      this.refreshProductList();
    }
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Confirm you want to Delete') == true) {
      this.productService.deleteProducts(_id).subscribe((res) => {
        this.resetForm(form);
        this.refreshProductList();
        // alert('deleted');
      });
    }
  }

  onUpdate(emp: Products) {
    console.log('updated');
    this.productService.selectedProduct = emp;
    this.refreshProductList();
  }

  refreshProductList() {
    var ProductsDetails: Products[];
    this.productService.getProductsList().subscribe((res) => {
      // this.ProductsService.Productss=res as Products[];
      console.log(res);
      ProductsDetails = res as Products[];
      ProductsDetails = ProductsDetails.filter((element) => {
        if (
          element.name != null &&
          element.description != null &&
          element.name.length != 0
        ) {
          return element;
        }
      });

      this.productService.products = ProductsDetails;
    });
  }
}
