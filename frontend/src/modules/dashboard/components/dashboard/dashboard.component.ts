import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category, fetchedCategory } from './../../models/category.model';
import { DashboardService } from './../../services/dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/modules/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  nameOfNewCategory: string = '';
  notification: string = '';
  isNotification: Boolean = false;
  allCategoryList: fetchedCategory;
  parentId : string ;
  checked: Boolean = false;

  constructor(
    private dashBoardService: DashboardService,
    private _snackBar: MatSnackBar,
    public authService :AuthService
  ) {}

   ngOnInit(): void {
    this.getCategory();
  }
  snackBar(message) {
    this._snackBar.open(message, 'ok', {
      duration: 2000,
    });
  }

  getCategory() {
    this.dashBoardService.getCategory().subscribe(
      (res) => {
        this.allCategoryList = res as fetchedCategory;
        this.dashBoardService.categoryList = res as fetchedCategory;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addnewCategory(form: NgForm) {
    let obj = {
      name : this.nameOfNewCategory,
      parent : this.parentId
    }

    if(form.valid){
      let newcat: Category = obj as Category;
      this.dashBoardService.addnewCategory(newcat).subscribe(
        (res) => {
          console.log(res);
          this.snackBar("Category added");
          this.getCategory();
        },
        (err) => {
          console.log(err);
        }
      );
    }
    else{
      this.snackBar("Form is not valid")
    }
   
  }

  parentcategoryChanges(event) {
    this.parentId = event.target.value;
    console.log(this.parentId);
  }
}
