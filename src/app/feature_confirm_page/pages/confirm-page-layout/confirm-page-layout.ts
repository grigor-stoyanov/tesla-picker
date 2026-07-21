import { Component } from '@angular/core';
import { Steps } from "../../../ui/steps/steps";
import { CarImg } from "../../../ui/car-img/car-img";
import { ConfirmView } from '../../components/confirm.view/confirm.view';

@Component({
  selector: 'app-confirm-page-layout',
  imports: [Steps, ConfirmView, CarImg],
  templateUrl: './confirm-page-layout.html',
  styleUrl: './confirm-page-layout.css',
})
export class ConfirmPageLayout {}
