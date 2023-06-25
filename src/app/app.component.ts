import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { MidComponent } from './mid/mid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HeroComponent,MidComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sunnyside';
}
