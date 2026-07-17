import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroBanner } from '../../../ui/hero-banner/hero-banner';

@Component({
  selector: 'app-home-hero',
  imports: [HeroBanner, RouterLink],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css',
})
export class HomeHero {}
