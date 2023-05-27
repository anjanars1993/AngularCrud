export class Employee {
    id: number|null;
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
    this.id=null;
    this.name=null;
    this.gender=null;
    this.contactPreference=null;
    this.dateOfBirth=null;
    this.department=null;
    this.isActive=null;
    }
}