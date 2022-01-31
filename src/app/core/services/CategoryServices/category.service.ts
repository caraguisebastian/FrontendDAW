import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly endpoint = '/Category';

  constructor(private apiService: ApiService) { }

  public get() {
    return this.apiService.get(this.endpoint);
  }

  public getById(id: string) {
    return this.apiService.get(this.endpoint+"/"+id)
  }

  public post(form: FormData) {
    return this.apiService.post(this.endpoint, form);
  }

  public put(form: FormData) {
    return this.apiService.put(this.endpoint, form);
  }

  public delete(id: string) {
    return this.apiService.delete(this.endpoint+"/"+id);
  }
}
