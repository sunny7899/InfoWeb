import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { HomeComponent } from "./home/home.component";
import { TermsOfServiceComponent } from "./terms-of-service/terms-of-service.component";

const routes: Routes = [
  {
    path: "privacy",
    component: PrivacyPolicyComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "terms",
    component: TermsOfServiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
