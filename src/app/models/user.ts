// const defaultAvatarImageUrl = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
// import { convertCSToReadableDate } from "./Utils";

export class User
{
    constructor(
        public id: string = "",
        public username: string = "",
        public password: string = "",
        public lastName: string | null = null,
        public firstName: string = "",
        public dateOfBirth: string | null = null,
        public gender: boolean | null = null,
        public address: string | null = null,
        public email: string | null = null,
        public phoneNumber: string | null = null,
        public avatarImage: string | null = null,
        public cardNumber: string = "",
        public cardPassword: string = "",
        public favoriteBooks: any = [],
    )
    {
        // this.dateOfBirth = convertCSToReadableDate(dateOfBirth);
    }


    public set value (v: any)
    {
        this.id = v.id;
        this.username = v.username;
        this.password = v.password;
        this.lastName = v.lastName;
        this.firstName = v.firstName;
        // this.dateOfBirth = convertCSToReadableDate(v.dateOfBirth);
        this.gender = v.gender;
        this.address = v.address;
        this.email = v.email;
        this.phoneNumber = v.phoneNumber;
        this.avatarImage = v.avatarImage;
        this.cardNumber = v.cardNumber;
        this.cardPassword = v.cardPassword;
        this.favoriteBooks = v.favoriteBooks;
    }

}