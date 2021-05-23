export interface User {
  id: string;
  avatar: string;
  email: string;
  name: string;
  [key: string]: any;
}

export enum UserType {
  Student = 's',
  Teacher = 't',
}

export enum CompleteAccountStep {
  Fill_Info = 'fi',
  Teacher_Question = 'tq',
  Thank_You = 'ty',
}