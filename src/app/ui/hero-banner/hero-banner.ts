import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-hero-banner',
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBanner {
  title = input<string>('');
  subtitle = input<string>('');
}
