import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {ApiService} from './services/api.service';
import {MatDialogRef} from '@angular/material/dialog';
// import { createInject, InjectFlags } from '@angular/compiler/src/core';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  save(){
    alert("Are you sure To save this Information")
  };
  addUser(){
    if(this.firstFormGroup.valid){
      this.api.postUser(this.firstFormGroup.value)
      .subscribe({
        next:(res)=>{
          alert("user added sucessfully");
          this.firstFormGroup.reset();
         
          this.dialogRef.close("saved");
        },
        error:()=>{
          alert("error while adding user")
        }
      })
    }
    // if(this.thirdFormGroup.valid){
    //   this.api.postUser(this.thirdFormGroup.value)
    //   .subscribe({
    //     next:(res)=>{
    //       alert("user added sucessfully");
    //       this.thirdFormGroup.reset();
         
    //       this.dialogRef.close("saved");
    //     },
    //     error:()=>{
    //       alert("error while adding user")
    //     }
    //   })
    // }
    // if(this.secondFormGroup.valid){
    //   this.api.postUser(this.secondFormGroup.value)
    //   .subscribe({
    //     next:(res)=>{
    //       alert("user added sucessfully");
    //       this.secondFormGroup.reset();
         
    //       this.dialogRef.close("saved");
    //     },
    //     error:()=>{
    //       alert("error while adding user")
    //     }
    //   })
    // }
    console.log(this.firstFormGroup.value);
  }

  firstFormGroup !:FormGroup;
  secondFormGroup !:FormGroup;
  thirdFormGroup !:FormGroup;

 
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private api : ApiService,
    // @Inject(MAT_DIALOG_DATA) public editData :any,
     private dialogRef : MatDialogRef<DialogComponent>) {}


  ngOnInit() {
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required],
      fourthCtrl: ['', Validators.required],
      fiveCtrl: ['', Validators.required],
      sixCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      firstoneCtrl: ['', Validators.required],
      secondoneCtrl: ['', Validators.required],
      thirdoneCtrl: ['', Validators.required],
      // fourthoneCtrl: ['', Validators.required],
      
    });
    this.thirdFormGroup = this._formBuilder.group({
      firsttwoCtrl: ['', Validators.required],
      secondtwoCtrl: ['', Validators.required],
    });
  }

}
