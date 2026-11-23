export type Signup_payload = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}

export type ChangePasswordPayload = {
  token: string,
  email: string,
  password: string,
  password_confirmation: string
}
