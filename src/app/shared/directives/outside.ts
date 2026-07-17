import { ViewContainerRef, Directive, inject, input, TemplateRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[outside], [outsideOutlet]',
})
export class OutsideDirective implements OnInit, OnDestroy {
  readonly id = input<string>('',{ alias: 'outside'});
  readonly outletId = input<string>('',{ alias: 'outsideOutlet' });

  private tpl = inject(TemplateRef<any>, { optional: true });
  private vcr = inject(ViewContainerRef);

  static readonly templates = new Map<string, TemplateRef<any>>();
  static readonly outlets = new Map<string, ViewContainerRef>();

  ngOnInit() {
    if (this.tpl) {
      OutsideDirective.templates.set(this.id(), this.tpl);
      const vcr = OutsideDirective.outlets.get(this.id());
      if (vcr) vcr.createEmbeddedView(this.tpl);
    } else {
      OutsideDirective.outlets.set(this.outletId()!, this.vcr);
      const tpl = OutsideDirective.templates.get(this.outletId()!);
      if (tpl) this.vcr.createEmbeddedView(tpl);
    }
  }

  ngOnDestroy() {
    OutsideDirective.templates.delete(this.id());
    OutsideDirective.outlets.delete(this.outletId()!);
  }
}