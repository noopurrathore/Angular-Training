import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgNonBindableExampleComponent } from './ng-non-bindable-example/ng-non-bindable-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { Lab2Component } from './lab2/lab2.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    ChildComponent,
    NgClassExampleComponent,
    NgForExampleComponent,
    NgNonBindableExampleComponent,
    NgStyleExampleComponent,
    NgSwitchExampleComponent,
    Lab2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
