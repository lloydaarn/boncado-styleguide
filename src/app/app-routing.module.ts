import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './sections/introduction/introduction.component';
import { TypographyComponent } from './sections/typography/typography.component';
import { ColorPaletteComponent } from './sections/color-palette/color-palette.component';
import { ButtonsComponent } from './sections/buttons/buttons.component';
import { IconographyComponent } from './sections/iconography/iconography.component';


const routes: Routes = [
  {path: '', component: IntroductionComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'color-palette', component: ColorPaletteComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'iconography', component: IconographyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
