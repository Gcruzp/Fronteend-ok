import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagAPIComponent } from "./pag-api/pag-api.component";
import { StreamingComponent } from "./streaming/streaming.component";
import { SobreComponent } from "./sobre/sobre.component";

const routes: Routes = [
    {path: 'app/pag-api', component: PagAPIComponent},
    {path: 'app/streaming', component: StreamingComponent},
    {path: 'app/sobre', component: SobreComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}