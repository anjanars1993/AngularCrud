export class Employee {
    id: number;
    name: string|null;
    gender: string|null;
    email?: string|null;
    phoneNumber?: number|null;
    contactPreference: string|null;
    dateOfBirth: Date|null;
    department: string|null;
    isActive: boolean|null;
    photoPath?: string|null;

   constructor() { 
    this.gender=null;
    this.contactPreference=null;
    this.dateOfBirth=null;
    this.department=null;
    this.isActive=null;
    }
}