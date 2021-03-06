// Angular Dependencies
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

// Project Dependencies
import { SggComponent } from './sgg.component';
import { ColorSwatchComponent } from './shared/color-swatch/color-swatch.component';
import { FontTypeComponent } from './shared/font-type/font-type.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { PrimaryNavigationComponent } from './shared/primary-navigation/primary-navigation.component';
import {ROUTES} from './sgg.routes';
import { HomeComponent } from './pages/home/home.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { FontsComponent } from './pages/fonts/fonts.component';
import { SpacingComponent } from './pages/spacing/spacing.component';
import { FooterComponent } from './shared/footer/footer.component';
import {DialogsModule} from './shared/dialogs/dialogs.module';
import {MaterialModule} from './material.module';
import {SharedModule} from './shared.module';
import {ColorsApiService} from './gateways/colors-api.service';
import {BaseApiService} from './gateways/base-api.service';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddNewItemComponent} from './shared/add-new-item/add-new-item.component';

@NgModule({
  imports: [
    // Angular Modules
    SharedModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    // Flex Layout Modules
    FlexLayoutModule,
    // Material Design Modules
    MaterialModule,
    // Local Modules
    DialogsModule,
    // Routing Modules
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  declarations: [
    SggComponent,
    ColorSwatchComponent,
    FontTypeComponent,
    TopHeaderComponent,
    PrimaryNavigationComponent,
    HomeComponent,
    ColorsComponent,
    FontsComponent,
    SpacingComponent,
    FooterComponent,
    AddNewItemComponent
  ],
  providers: [
    BaseApiService,
    ColorsApiService
  ],
  bootstrap: [SggComponent]
})
export class SggModule { }
