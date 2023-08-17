import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { FilmesComponent } from "./filmes/filmes.component";
import { HomeComponent } from "./home/home.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'filmes/:id', component: FilmesComponent},
    {path: 'sobre', component: AboutComponent}
];