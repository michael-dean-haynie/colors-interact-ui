import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DevelopmentApiService } from './services/development-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'colors-interact-ui';

  private subscriptions: Subscription[] = [];

  constructor(
    private developmentApiService: DevelopmentApiService
  ) { }


  ngOnInit(): void {
    this.subscriptions.push(this.developmentApiService.helloworld().subscribe());
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
