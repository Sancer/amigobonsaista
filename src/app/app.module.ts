import { FormsModule } from '@angular/forms';
import { AuthModule } from './modules/auth/auth.module';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { MaterializeModule } from 'angular2-materialize';

import { Routes } from './app.router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ThumbComponent } from './components/thumb/thumb.component';
import { DetailComponent } from './components/detail/detail.component';

import { BonsaiService } from './services/bonsai.service';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ThumbComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    MaterializeModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    RouterModule.forRoot(Routes),
    AuthModule
  ],
  providers: [
    BonsaiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
