import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { CINEMA_API } from "../app.api";
import { ErrorHandler } from "../app.error-handler";
import { Filme } from "./filme/filme.model";

@Injectable()
export class FilmesService{
    constructor(private http: HttpClient){}

    listarFilmesPorCategoria(id: number): Observable<Filme[]>{
        return this.http.get<Filme[]>(`${CINEMA_API}/filmes?categoriaId=${id}`).pipe(catchError(ErrorHandler.handleError));
    }
}