import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

export const Routes = [
    {
        path: 'signin',
        component: SigninComponent
    }, {
        path: 'signup',
        component: SignupComponent
    }
];
