import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-polo',
  templateUrl: './polo.component.html',
  styleUrls: ['./polo.component.scss'],
})
export class PoloComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private activadeRoute: ActivatedRoute,
    private router: Router
  ) {}
  apiURL = environment.apiURL;
  data: any;
  poloAtivo = 'não';
  showInformation = true;

  ngOnInit(): void {
    var id = this.activadeRoute.snapshot.params.id;
    this.getData(id);
  }

  getData(id: number) {
    this.http.get(`${this.apiURL}/${id}`).subscribe(
      (polo: any) => {
        if (polo) {
          this.data = polo;
          if (this.data.active) {
            this.poloAtivo = 'sim';
          }
          this.showInformation = true;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  back() {
    this.router.navigate(['/polos']);
  }
}
