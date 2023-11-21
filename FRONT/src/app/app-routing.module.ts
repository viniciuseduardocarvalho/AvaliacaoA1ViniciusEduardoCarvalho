import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TarefaCadastrarComponent } from "./pages/tarefa/tarefa-cadastrar/tarefa-cadastrar.component";
import { TarefaAlterarComponent } from "./pages/tarefa/tarefa-alterar/tarefa-alterar.component";
import { TarefaListarComponent } from "./pages/tarefa/tarefa-listar/tarefa-listar.component";
import { TarefaListarComponent } from "./pages/tarefa/tarefa-listarconcluidas/tarefa-listarconcluidas.component";
import { PatioCadastrarComponent } from "./pages/patio/patio-cadastrar/patio-cadastrar.component";
import { PatioAlterarComponent } from "./pages/patio/patio-alterar/patio-alterar.component";

const routes: Routes = [
  {
    path: "",
    component: CarroListarComponent,
  },
  {
    path: "pages/carro/listar",
    component: CarroListarComponent,
  },
  {
    path: "pages/carro/cadastrar",
    component: CarroCadastrarComponent,
  },
  {
    path: "pages/carro/alterar/:id",
    component: CarroAlterarComponent,
  },
  {
    path: ".",
    component: PatioListarComponent,
  },
  {
    path: "pages/patio/listar",
    component: PatioListarComponent,
  },
  {
    path: "pages/patio/cadastrar",
    component: PatioCadastrarComponent,
  },
  {
    path: "pages/patio/alterar/:id",
    component: PatioAlterarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
