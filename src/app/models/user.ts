// const defaultAvatarImageUrl = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
// import { convertCSToReadableDate } from "./Utils";

export class User
{
    constructor(
        public id: string = "",
        public username: string = "",
        public password: string = "",
        public displayName: string = "",
        public dateOfBirth: string | null = null,
        public gender: boolean | null = null,
        public address: string | null = null,
        public email: string | null = null,
        public phoneNumber: string | null = null,
        public avatarImage: string | null = null,
        public role: string = "buyer",
        public favoriteBooks: any = [],
    )
    {
        // this.dateOfBirth = convertCSToReadableDate(dateOfBirth);
    }


    public set value (v: User)
    {
        this.id = v.id;
        this.username = v.username;
        this.password = v.password;
        this.displayName = v.displayName;
        // this.dateOfBirth = convertCSToReadableDate(v.dateOfBirth);
        this.gender = v.gender;
        this.address = v.address;
        this.email = v.email;
        this.phoneNumber = v.phoneNumber;
        this.avatarImage = v.avatarImage;
        this.role = v.role;
        this.favoriteBooks = v.favoriteBooks;
    }

}