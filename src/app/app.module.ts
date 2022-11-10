import { provideCloudinaryLoader } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularStandaloneComponent } from './angular-standalone/angular-standalone.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandaloneWithNgOptimizedImageComponent } from './standalone-with-ng-optimized-image/standalone-with-ng-optimized-image.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularStandaloneComponent,
    StandaloneWithNgOptimizedImageComponent,
    AppRoutingModule
  ],
  providers: [provideCloudinaryLoader('https://res.cloudinary.com')],
  bootstrap: [AppComponent]
})
export class AppModule { }
