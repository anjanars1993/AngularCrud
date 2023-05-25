export class Employee {
    id: number;
    name: string;
    gender: string;
    email?: string;
    phoneNumber?: number;
    contactPreference: string;
    dateOfBirth: Date;
    department: string;
    isActive: boolean;
    photoPath?: string;

   constructor() { 
    this.id=1;
    this.name="";
    this.gender="";
    this.contactPreference="";
    this.dateOfBirth=new Date;
    this.department="";
    this.isActive=true;
    }
}