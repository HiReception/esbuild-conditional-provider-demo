import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OptionOneService } from './option-one.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private option: OptionOneService,
  ) {}
  title = 'esbuild-conditional-provider-demo';
  optionText(): string {
    return this.option.optionText;
  }
}
