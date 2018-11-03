import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpWorkComponent } from './http-work/http-work.component';
import { FileComponent } from './file/file.component';

@NgModule({
  declarations: [AppComponent, HttpWorkComponent, FileComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
