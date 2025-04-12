import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CompanyListComponent } from './components/company-list/company-list.component';

@NgModule({
  declarations: [AppComponent, CompanyListComponent],
  imports: [BrowserModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule {}
