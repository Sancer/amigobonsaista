import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { LogoutComponent } from './components/logout/logout.component';

export const Routes = [
    {
        path: 'login',
        redirectTo: 'signin'
    }, {
        path: 'signin',
        component: SigninComponent
    }, {
        path: 'signup',
        component: SignupComponent
    }, {
        path: 'profile',
        component: ProfileComponent
    }, {
        path: 'logout',
        component: LogoutComponent
    }
];
