import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custome.validator';
import { CustomRegex } from 'src/app/validators/validatorsPattern';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit{
  personalDetailsForm! : FormGroup;
  documentUploadForm!:FormGroup;

  constructor(private fb : FormBuilder){
    this.personalDetailsForm = this.fb.group({
      name : [null,[Validators.required]],
      email : [null,[Validators.required,Validators.pattern(CustomRegex.email)]],
      phone : [null,[Validators.required,CustomValidator.phoneNUmberValidator()]],
      dob : [null,[Validators.required,CustomValidator.dateofaBirthValidator()]],
      gender : [null,[Validators.required]],
      maritalStatus : ['',[Validators.required]],
    })
  }

  ngOnInit(): void {
    
  }

  get f(){
    return this.personalDetailsForm.controls
  }
}
