import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { RestApiService } from 'src/services/rest-api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'backseemless';
  countryCodeImage = "http://purecatamphetamine.github.io/country-flag-icons/3x2/";
  ibanNumber = "AE";
  transferAmount = 5000;
  defaultBalance = 100000;
  bankName = '';
  bankLogo = 'https://dq8dwmysp7hk1.cloudfront.net/logos/emiratesnbd.svg';

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Remaining', 'Transfer'];
  public pieChartData: SingleDataSet = [this.defaultBalance - this.transferAmount,this.transferAmount];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [];

  constructor(public restApi: RestApiService) {
    this.restApi.getBalance().subscribe(response => {
      this.defaultBalance = response.data.balance;
    });
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  getBankLogo(){
    return this.bankLogo;
  }
  getLink(){
    return this.countryCodeImage + this.ibanNumber.substr(0,2) + '.svg';
  }
  
  updatePie(){
    this.pieChartData = [this.defaultBalance - this.transferAmount,this.transferAmount];
  }

  getIbanDetails(iban : String): void {
    this.restApi.getIbanDetails(iban).subscribe(response => {
      this.bankName = response.data.bank;
      this.bankLogo = response.data.logo;
    });
  }
  
  transferMoneyToIban(transferAmount: number,iban : String): void {
    
    this.restApi.transferMoneyToIban(iban,transferAmount).subscribe(response => {
      this.defaultBalance = response.data.balance;
    });
  }
}
