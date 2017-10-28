import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { AppComponent } from './app.component';

export const Routes = [
    {
        path: '',
        component: ListComponent,
        pathMatch: 'full'
    }, {
        path: 'list',
        component: ListComponent
    }, {
        path: 'detail/:id',
        component: DetailComponent
    }
];
