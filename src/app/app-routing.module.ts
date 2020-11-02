import { NgModule } from '@angular/core';
import { NewsComponent } from './pages/news/news.component';
import { HeadlinesComponent } from './pages/headlines/headlines.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo : 'headlines', pathMatch : 'full' },
  { path: 'news', component : NewsComponent },
  { path: 'headlines', component : HeadlinesComponent },
  { path: '**', component : NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
