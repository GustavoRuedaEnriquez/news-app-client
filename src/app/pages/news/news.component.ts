import { Component, forwardRef, OnInit } from '@angular/core';
import { NewsService } from '../../globals/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news:Array<any> = [];

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    let select:any = document.getElementById('sources-s');
    
    this.newsService.getSourcesName()
      .then(data => {
        for(let option in data) {
          let opt = document.createElement('option');
          opt.appendChild(document.createTextNode(`${data[option]}`));
          opt.value = `${data[option]}`;
          select.appendChild(opt);
          }
        })
      .catch((err) =>{
        console.error(err)
      }
    );    
  }

  searchNews(): void {
    let input:any = document.getElementById('topic-in');
    let select:any = document.getElementById('sources-s');

    console.log(input.value);
    console.log(select.options[select.selectedIndex].text);

    this.newsService.getNewsByTopic(input.value, select.options[select.selectedIndex].text)
      .then(data => {
        
        console.log(data)
        this.news = data;
      })
      .catch((err) =>{
        console.error(err)
      })
    }
  }
