export class HttpError extends Error {
  public readonly statusCode: number;
  public readonly url: string | undefined;
  public readonly method: string | undefined;
  constructor(
    statusCode: number,
    message: string,
    url?: string,
    method?: string,
    cause?: Error
  ) {
    super(message || `HTTP Error ${statusCode}`);
    this.name = "HttpError";
    this.statusCode = statusCode;
    this.url = url;
    this.method = method;
  }
}
