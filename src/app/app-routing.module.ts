import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './sections/introduction/introduction.component';
import { TypographyComponent } from './sections/typography/typography.component';
import { ColorPaletteComponent } from './sections/color-palette/color-palette.component';
import { ButtonsComponent } from './sections/buttons/buttons.component';
import { IconographyComponent } from './sections/iconography/iconography.component';
import { FormsComponent } from './sections/forms/forms.component';
import { FormControlsComponent } from './sections/form-controls/form-controls.component';
import { TablesComponent } from './sections/tables/tables.component';
import { ModalsComponent } from './sections/modals/modals.component';
import { TooltipsComponent } from './sections/tooltips/tooltips.component';
import { PopoversComponent } from './sections/popovers/popovers.component';
import { LibrariesComponent } from './sections/libraries/libraries.component';


const routes: Routes = [
  {path: '', component: IntroductionComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'color-palette', component: ColorPaletteComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'iconography', component: IconographyComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'form-controls', component: FormControlsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'modals', component: ModalsComponent},
  {path: 'tooltips', component: TooltipsComponent},
  {path: 'popovers', component: PopoversComponent},
  {path: 'libraries', component: LibrariesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
