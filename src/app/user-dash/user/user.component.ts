import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component'
import { ApiService } from '../dialog/services/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  editData(row:any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row
    })
  }
  displayedColumns: string[] = ['firstCtrl','secondCtrl','thirdCtrl','fourthCtrl','fiveCtrl','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private dialog: MatDialog, private api : ApiService) { }
  openDialog() {
    this.dialog.open(DialogComponent, {
      
    });
  }
  getAllUser(){
    this.api.getUser()
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.paginator = this.paginator;
        this.dataSource.sort= this.sort;
      },
      error:(res)=>{
        console.log("error while fetching")
      }
    })
  }




  ngOnInit(): void {
    this.getAllUser();
  }

}
