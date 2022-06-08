export function ResponseBuilder(this: any, data: any, status:'success' | 'failure' | 'auth-failed', errorMessage?: string){
    this.data = data;
    this.status = status;
    this.errorMessage = errorMessage || "";
}
