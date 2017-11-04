import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from './';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  model: Settings = new Settings();

  constructor( private http: HttpClient
    , private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.settingsService.getSettings(1)
      .then(
        ( settings:Settings )=>{ this.model = settings; },
        (error) => { console.log( "An Error has occurred.  Could not retrieve settings for this site.", error ); }
      );
  }

  onSubmitClick(){
    this.http.post('/ajaxproxy.cfc?method=clientAdmin.settings.saveSettings',JSON.stringify(this.model))
    .subscribe(
      (result)=>{console.log('saveSettings error', result ); },
      (res)=>{ console.log('saveSettings error', res ); }
    );
  }

}
