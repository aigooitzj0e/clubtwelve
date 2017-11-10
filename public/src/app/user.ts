export class User {
  constructor(
    public name: string = '',
    public email: string = "",
    public password: string = "",
    public confirmPassword: string = "",
		private admin: boolean = false,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}
