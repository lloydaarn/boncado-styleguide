import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './sections/introduction/introduction.component';
import { TypographyComponent } from './sections/typography/typography.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
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

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    TypographyComponent,
    NavbarComponent,
    SidebarComponent,
    MainPanelComponent,
    ColorPaletteComponent,
    ButtonsComponent,
    IconographyComponent,
    FormsComponent,
    FormControlsComponent,
    TablesComponent,
    ModalsComponent,
    TooltipsComponent,
    PopoversComponent,
    LibrariesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
