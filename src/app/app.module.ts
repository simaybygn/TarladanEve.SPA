import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomePageComponent } from './HomePage/homePage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { SellersComponent } from './sellers/sellers.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignModalComponent } from './sign-modal/sign-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { CreateUpdateComponent } from './admin-panel/create-update/create-update.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    ProductsComponent,
    SellersComponent,
    ContactComponent,
    SignModalComponent,
    AdminPanelComponent,
    CreateUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    CdkAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    NgbCarouselModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    GoogleMapsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
