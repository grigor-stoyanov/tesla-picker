import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
