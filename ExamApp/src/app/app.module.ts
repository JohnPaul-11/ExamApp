import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,  
    AppComponent,      
    QuestionsComponent,  
    RegisterComponent,   
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
