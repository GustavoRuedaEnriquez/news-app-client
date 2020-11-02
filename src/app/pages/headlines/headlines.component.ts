import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../globals/services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  
  news:Array<any> = [];

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
  }

  searchHeadlines(): void {
    
    let select:any = document.getElementById('countries-s');
    this.newsService.getHeadlinesByCounty(select.options[select.selectedIndex].value)
      .then(data => {
        this.news = data
      })
      .catch((err) =>{
        console.error(err)
      })
    }
}
