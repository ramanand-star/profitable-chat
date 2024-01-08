import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'patternlearing',
    loadChildren: () => import('./patternlearing/patternlearing.module').then( m => m.PatternlearingPageModule)
  },
  {
    path: 'recentexample',
    loadChildren: () => import('./recentexample/recentexample.module').then( m => m.RecentexamplePageModule)
  },
  {
    path: 'get-more',
    loadChildren: () => import('./get-more/get-more.module').then( m => m.GetMorePageModule)
  },
  {
    path: 'chart-patterns',
    loadChildren: () => import('./chart-patterns/chart-patterns.module').then( m => m.ChartPatternsPageModule)
  },
  {
    path: 'doublebottom',
    loadChildren: () => import('./doublebottom/doublebottom.module').then( m => m.DoublebottomPageModule)
  },
  {
    path: 'top',
    loadChildren: () => import('./top/top.module').then( m => m.TopPageModule)
  },
  {
    path: 'head-scame',
    loadChildren: () => import('./head-scame/head-scame.module').then( m => m.HeadScamePageModule)
  },
  {
    path: 'reactangle',
    loadChildren: () => import('./reactangle/reactangle.module').then( m => m.ReactanglePageModule)
  },
  {
    path: 'reactangle-top',
    loadChildren: () => import('./reactangle-top/reactangle-top.module').then( m => m.ReactangleTopPageModule)
  },
  {
    path: 'rounding-bottom',
    loadChildren: () => import('./rounding-bottom/rounding-bottom.module').then( m => m.RoundingBottomPageModule)
  },
  {
    path: 'rounding-top',
    loadChildren: () => import('./rounding-top/rounding-top.module').then( m => m.RoundingTopPageModule)
  },
  {
    path: 'cup-handle',
    loadChildren: () => import('./cup-handle/cup-handle.module').then( m => m.CupHandlePageModule)
  },
  {
    path: 'inverted',
    loadChildren: () => import('./inverted/inverted.module').then( m => m.InvertedPageModule)
  },
  {
    path: 'accending',
    loadChildren: () => import('./accending/accending.module').then( m => m.AccendingPageModule)
  },
  {
    path: 'decending',
    loadChildren: () => import('./decending/decending.module').then( m => m.DecendingPageModule)
  },
  {
    path: 'symmatrical',
    loadChildren: () => import('./symmatrical/symmatrical.module').then( m => m.SymmatricalPageModule)
  },
  {
    path: 'scoop',
    loadChildren: () => import('./scoop/scoop.module').then( m => m.ScoopPageModule)
  },
  {
    path: 'cradle',
    loadChildren: () => import('./cradle/cradle.module').then( m => m.CradlePageModule)
  },
  {
    path: 'bullish',
    loadChildren: () => import('./bullish/bullish.module').then( m => m.BullishPageModule)
  },
  {
    path: 'head-top',
    loadChildren: () => import('./head-top/head-top.module').then( m => m.HeadTopPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
