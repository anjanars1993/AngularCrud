import { Directive,Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector:'[passwordValidator]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:PasswordValidatorDirective,
        multi:true
    }]
})

export class PasswordValidatorDirective implements Validator{
    @Input('passwordValidator') controlToCompareName:string="";
    
    validate(control: AbstractControl): {[key:string]:any} | null
    {
        const controlToCompare=control.parent?.get(this.controlToCompareName);       
        if(control.value!==controlToCompare?.value)
        {
            return {'notequal':true};
        }
        else
        return null;
    }
}