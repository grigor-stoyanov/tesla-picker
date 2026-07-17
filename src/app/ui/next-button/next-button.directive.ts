import { computed, Directive, HostListener, inject, input, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Directive({
  selector: 'button[appNextButton]',
  host: {
    '[disabled]': 'isDisabled()',
    '[class.btn-next]': 'true',
    '[class.btn-next--valid]': 'form()?.valid',
    '[class.btn-next--invalid]': '!form()?.valid',
  }
})
export class NextButtonDirective {
  readonly form = input<NgForm | undefined>();
  readonly navigateTo = input<string[]>([]);

  private router = inject(Router);

  readonly completed = signal(false);
  readonly isDisabled = computed(() => !this.form()?.valid);

  @HostListener('click')
  onClick() {
    if (this.form()?.valid) {
      this.completed.set(true);
      if (this.navigateTo().length) {
        this.router.navigate(this.navigateTo());
      }
    }
  }
}
