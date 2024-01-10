import { Component, inject } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h1 class="text-xl my-6">Editor</h1>
    
    <div class="flex gap-2 items-center">
      <input 
        type="text"
        class="input input-bordered"
        #title
        (input)="settingsService.setConfig('title', title.value)"
        [value]="settingsService.config().title"
      >
        
        <input 
          type="checkbox"
          class="toggle toggle-success"
          #enableShop
          (input)="settingsService.setConfig('enableShop', enableShop.checked)"
          [checked]="settingsService.config().enableShop"
        >
      
      <input 
        type="color"
        class="input input-bordered"
        #color
        (input)="settingsService.setConfig('color', color.value)"
        [value]="settingsService.config().color"
      >
    </div>
  `,
  styles: ``
})
export class EditorComponent {
  settingsService = inject(SettingsService)
}

