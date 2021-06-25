import { Component, OnInit } from '@angular/core';
import { LiveService } from 'src/app/shared/service/Live.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: '' },
// ];

@Component({
  selector: 'app-polos',
  templateUrl: './polos.component.html',
  styleUrls: ['./polos.component.scss'],
})
export class PolosComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'business',
    'valuation',
    'active',
    'acao',
  ];
  // dataSource = ELEMENT_DATA;
  apiURL = environment.apiURL;
  data: any;
  emptyList = true;
  constructor(
    public liveService: LiveService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  teste(id: number): void {
    this.router.navigate([`polo/${id}`]);
  }

  //"id":"1","name":"Itaú BBA","business":"Financial Center","valuation":850000000.5
  getData() {
    this.http.get(this.apiURL).subscribe(
      (data: any) => {
        if (data && data.length > 0) {
          this.data = data;
          this.emptyList = false;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
