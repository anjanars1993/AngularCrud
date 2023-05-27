import { Directive,Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector:'[appselectvalidator]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:SelectRequiredValidatorDirective,
        multi:true
    }]
})

export class SelectRequiredValidatorDirective implements Validator{
    @Input('appselectvalidator') defaultValue:string="";
    
    validate(control: AbstractControl): {[key:string]:any} | null
    {
        return control.value===this.defaultValue?{'defaultValue':true}:null
    }
}