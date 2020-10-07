import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
// import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { OddsComponent } from './odds/odds.component';
import { EvensComponent } from './evens/evens.component';
import { GameControlsComponent } from './game-controls/game-controls.component'

import { BasicHighLightDirective } from 'src/app/basic-highlight/basic-highlight.directive';
import { BackHighLightRedDirective } from 'src/app/background/back-high-light-red.directive';
import { UnlessDirective } from 'src/app/background/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    OddsComponent,
    EvensComponent,
    GameControlsComponent,

    BasicHighLightDirective,
    BackHighLightRedDirective,
    UnlessDirective

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    // HttpClientModule

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
