import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const DEFAULT_ANIMATION_SPEED = 8

@Directive({
  selector: '[appAnimatedCounter]'
})
export class AnimatedCounterDirective implements OnInit, OnDestroy {
  @Input('appAnimatedCounter') value: number
  @Input() delay = 0;
  @Input() speed = DEFAULT_ANIMATION_SPEED

  staticText: string

  private destroyed$ = new Subject<void>();
  private startingValue: number = 0;
  private startingValueDecimal: number = 0;

  constructor(
    private _el: ElementRef<HTMLDivElement>,
    private _renderer: Renderer2) { }

  ngOnInit() {
    if (!!this._el.nativeElement.textContent) {
      this.staticText = this._el.nativeElement.textContent
    }

    if (this.delay > 0) {
      this._renderer.setProperty(this._el.nativeElement, 'textContent', this.staticText)
    }

    timer(this.delay || 0)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        complete: () => this.animate()
      })
  }

  private get hasDecimals(): boolean {
    const decimalPortion = this.getDecimalValuePortion(1)
    return decimalPortion !== undefined ? true : false
  }

  private getDecimalValuePortion(indexPosition): number {
    const decimal = this.value.toString().split('.')[indexPosition]
    return parseFloat(decimal)
  }

  private animate() {
    if (this.value && this.safeValidate(this.value)) {
      const start = () => {
        if (this.startingValue < this.value) {
          this.startingValue++;
          this._renderer.setProperty(this._el.nativeElement, 'textContent', `${this.startingValue}${this.staticText ? this.staticText : ''}`);
          setTimeout(start, this.speed);
        } else if (this.hasDecimals) {
          if (this.startingValueDecimal < this.getDecimalValuePortion(1)) {
            this.startingValueDecimal++;
            this._renderer.setProperty(this._el.nativeElement, 'textContent', `${this.getDecimalValuePortion(0)}.${this.startingValueDecimal}${this.staticText ? this.staticText : ''}`);
            setTimeout(start, this.speed);
          }
        }
      };

      start();
    }
  }

  private safeValidate(value): boolean {
    return typeof value === 'number'
  }

  ngOnDestroy() {
    this.destroyed$.next()
    this.destroyed$.complete()
  }
}
