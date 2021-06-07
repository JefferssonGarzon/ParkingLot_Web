import { AbstractControl } from '@angular/forms';
import { UserService } from '../services/user.service';

export class MyValidations {

    static validateEmail(userService: UserService){
        return(control: AbstractControl) => {
            const value = control.value;
            return userService.checkEmail(value)
        }
    }

}