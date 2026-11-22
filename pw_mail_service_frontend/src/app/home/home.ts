import { Component } from '@angular/core';
import { GlobalHeader } from '../common/global-header/global-header';
import { GlobalFooter } from '../common/global-footer/global-footer';

@Component({
  imports: [GlobalHeader, GlobalFooter],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
}
