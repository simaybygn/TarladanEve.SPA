import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { ContactComponent } from "./contact/contact.component";
import { HomePageComponent } from "./HomePage/homePage.component";
import { ProductsComponent } from "./products/products.component";
import { SellersComponent } from "./sellers/sellers.component";
import { AdminGuard } from "./services/admin.guard";
import { SignModalComponent } from "./sign-modal/sign-modal.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

const routes: Routes=[
    {path:'aboutUs', component: AboutUsComponent},
    {path:'contact', component: ContactComponent},
    {path:'homePage', component: HomePageComponent},
    {path:'products', component: ProductsComponent},
    {path:'sellers', component: SellersComponent},
    {path:'signModal', component: SignModalComponent},
    {path:'adminPanel', component: AdminPanelComponent,canActivate:[AdminGuard]},
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        ReactiveFormsModule,
        MatInputModule
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }