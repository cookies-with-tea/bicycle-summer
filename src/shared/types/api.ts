export type ErrorsResponseType = Array<Record<string, Array<string>>>

export type ResponseType<T> = {
  data: T
  errors: ErrorsResponseType
  messages: Array<string>
}
