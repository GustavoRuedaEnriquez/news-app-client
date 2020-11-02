import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  getNewsByTopic(topic:string, source:string):Promise<any> {
    topic = topic.trim();
    return this.httpClient.get(`http://127.0.0.1:3000/api/news?sources=${source}&q=${topic}`).toPromise();
  }

  getHeadlinesByCounty(country:string):Promise<any> {
    return this.httpClient.get(`http://127.0.0.1:3000/api/head-lines?country=${country}`).toPromise();
  }

  getSourcesName():Promise<any> {
    return this.httpClient.get('http://127.0.0.1:3000/api/sources-names').toPromise();
  }
}
