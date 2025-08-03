import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import * as moment from "moment";


export class CustomValidator {
    // Phone Validator


    static phoneNUmberValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let val = control.value as string;

            if (!val) return null

            let regExp = /^[6-9]\d{9}$/

            let isValid = regExp.test(val);

            if (isValid) {
                return null
            } else {
                return {
                    isValidPhoneNUmber: 'Phone number must be 10 digits long and begin with 6, 7, 8, or 9'
                }
            }
        }
    }


    //Date Age Validator

    static dateofaBirthValidator(): ValidatorFn{
        return (control: AbstractControl) : ValidationErrors | null =>{
            let val = control.value;

            if(!val) return null;

            const dob = moment(val,'YYYY-MM-DD')

            const today = moment()

            const diff = today.diff(dob,'years')

            if(diff >= 21){
                return null
            }else{
                return{
                    invalidValidDateOfBirth : 'You must be at least 21 years old to proceed.'
                }
            }

           
        }
    }
}