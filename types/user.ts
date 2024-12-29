import { Difficulty } from "./difficulty";
export interface User {
  _id: string;
  email: string;
  username: string;
  password: string;
  emailVerificationCode?: string;
  emailVerificationCodeExpiration?: Date;
  verified: boolean;
}
