import { Routes, RouterModule } from '@angular/router';
import {
  LibraryViewComponent, LibraryHomeComponent, LibraryGridComponent, LibraryButtonsComponent, LibraryPanelsComponent
} from './components/library-components-barrel';

const LIBRARY_ROUTES: Routes = [
  {path: '', component: LibraryViewComponent, children: [
    {path: '', component: LibraryHomeComponent},
    {path: 'grid', component: LibraryGridComponent},
    {path: 'buttons', component: LibraryButtonsComponent},
    {path: 'panels', component: LibraryPanelsComponent},
  ]},
]

export const LibraryRoutes = RouterModule.forChild(LIBRARY_ROUTES)
