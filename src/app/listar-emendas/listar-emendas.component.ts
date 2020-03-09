import { Component, OnInit } from '@angular/core';
import { Emendas } from './../shared/emenda.model';
import { ApiEmendasService } from './../api-emendas.service';
import currencyFormatter from 'currency-formatter';


@Component({
  selector: 'app-listar-emendas',
  templateUrl: './listar-emendas.component.html',
  styleUrls: ['./listar-emendas.component.scss']
})
export class ListarEmendasComponent implements OnInit {

  public loading = true;

  public emendas: Emendas[] = [];

  qtEmendas: any = 0;
  qtEmpenhado: any = 0;
  qtLiberado: any = 0;
  qtConcluido: any = 0;

  expenseChartData: any;
  autorChartData: any;

  chartOptions = {
    scales: {
      yAxes: [{ ticks: { beginAtZero: true } }]
    }
  };


  constructor(private apiEmendasService: ApiEmendasService) { }

  ngOnInit(): void {
    this.apiEmendasService.getAll().subscribe(
      emendas => { this.loading = false; this.emendas = emendas.slice(1, 3); this.setValues(emendas); },
      error => alert('Erro ao carregar lista')
    );
    
  }

  public generateReports(termoDaPesquisa: string): void {
    if (!termoDaPesquisa) {
      alert('Campo Pesquisar Vazio')
    } else {
      this.loading = true;
      this.apiEmendasService.getAllQuery(termoDaPesquisa).subscribe(this.setValues.bind(this));
    }
  }

  private setValues(emendas: Emendas[]) {

    this.emendas = emendas;
    this.calculateEmendas();
    this.loading = false;
    // this.setChartData();
  }

  private calculateEmendas() {
    let qtEmendas = 0;
    let qtEmpenhado = 0;
    let qtLiberado = 0;
    let qtConcluido = 0;

    this.emendas.forEach(emenda => {

      qtEmendas += currencyFormatter.unformat(emenda.empenhado, { code: 'BRL' }) ;
      qtEmpenhado += currencyFormatter.unformat(emenda.empenhado, { code: 'BRL' });
      qtLiberado += currencyFormatter.unformat(emenda.pago, { code: 'BRL' });
      qtConcluido += currencyFormatter.unformat(emenda.liquidado, { code: 'BRL' });

    });
    this.qtEmendas = currencyFormatter.format(qtEmendas, { locale:  'BRL', });
    this.qtEmpenhado = currencyFormatter.format(qtEmpenhado, { locale:  'BRL', });
    this.qtLiberado = currencyFormatter.format(qtLiberado, { locale:  'BRL', });
    this.qtConcluido = currencyFormatter.format(qtConcluido, { locale:  'BRL', });
  }

  // private setChartData() {
  //   let chartData = [];
  //   this.emendas.forEach(emenda => {

  //     if(emenda.autor) {

  //     }


  //   });


  // }


  // public pesquisa(termoDaPesquisa: string): void {
  //   console.log(termoDaPesquisa);
  // }



}
