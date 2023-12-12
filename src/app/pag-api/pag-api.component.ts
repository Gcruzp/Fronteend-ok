import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pag-api',
  templateUrl: './pag-api.component.html',
  styleUrls: ['./pag-api.component.css']
})
export class PagAPIComponent implements OnInit {
  
  constructor(private apiService: ApiService) {}

  personagens: any[] = [];

  ngOnInit() {
    this.listagem();
  }

  listagem() {
    this.apiService.getCharacters().subscribe(
      (data: any[]) => {
        this.personagens = data;
      },
      (error) => {
        console.error('Erro ao obter personagens:', error);
      }
    );
  }
}
