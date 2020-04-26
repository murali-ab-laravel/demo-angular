import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isThemeDark: boolean= false;
  constructor(private themeService:ThemeService) { }
  ngOnInit() {
     this.themeService.isThemeDark.subscribe((val)=>{
      console.log(val);
      this.isThemeDark=val;
    })
    
  }

  
}
