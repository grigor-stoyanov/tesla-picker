import { Component } from '@angular/core';
import { HomeHero } from '../../components/home-hero/home-hero';

@Component({
  selector: 'app-home-layout',
  imports: [HomeHero],
  templateUrl: './home.layout.html',
  styleUrl: './home.layout.css',
})
export class HomeLayout {}
