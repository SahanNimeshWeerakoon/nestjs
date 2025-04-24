import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{
    signup() {
        return "amor amor i have signed up";
    }
    signin() {
        return "taukana daala i have signed in";
    }
}