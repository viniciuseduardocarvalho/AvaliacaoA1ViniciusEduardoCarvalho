import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Tarefa } from "../../../models/tarefa.model";
import { Categoria } from "../../../models/categoria.model";

@Component({
  selector: "app-tarefa-alterar",
  templateUrl: "./tarefa-alterar.component.html",
  styleUrls: ["./tarefa-alterar.component.css"],
})
export class TarefaAlterarComponent {
  tarefaId: number = 0;
  titulo: string = "";
  descricao: string = "";
  categoria: string = "";
  status: string = "";
  categoriaId: number = 0;
  categorias: Categoria[] = [];

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parametros) => {
        let { id } = parametros;
        this.client
          .get<Tarefa>(
            `https://localhost:7015/api/tarefa/buscar/${id}`
          )
          .subscribe({
            next: (tarefa) => {
              this.client
                .get<Categoria[]>(
                  "https://localhost:7015/api/categoria/listar"
                )
                .subscribe({
                  next: (categorias) => {
                    this.patios = patios;
                    this.carroId = carro.carroId!;
                    this.marca = carro.marca;
                    this.modelo = carro.modelo;
                    this.placa = carro.placa;
                  },
                  error: (erro) => {
                    console.log(erro);
                  },
                });
            },
            //Requisição com erro
            error: (erro) => {
              console.log(erro);
            },
          });
      },
    });
  }

  alterar(): void {
    let tarefa: Tarefa = {
      marca: this.marca,
      modelo: this.modelo,
      placa: this.placa,
      patioId: this.patioId,
    };

    console.log(tarefa);

    this.client
      .put<Tarefa>(
        `https://localhost:7015/api/tarefa/alterar/${this.tarefaId}`,
        tarefa
      )
      .subscribe({
        //A requição funcionou
        next: (carro) => {
          this.snackBar.open(
            "Carro alterado com sucesso!!",
            "Green Parking",
            {
              duration: 1500,
              horizontalPosition: "right",
              verticalPosition: "top",
            }
          );
          this.router.navigate(["pages/carro/listar"]);
        },
        //A requição não funcionou
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
