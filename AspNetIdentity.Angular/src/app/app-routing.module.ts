import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RestrictedComponent } from './restricted/restricted.component';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { DateTestComponent } from './date-test/date-test.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'date',
      component: DateTestComponent
    },
    {
      path: 'restricted',
      component: RestrictedComponent,
      canActivate: [
        IsLoggedInGuard
      ]
    }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
