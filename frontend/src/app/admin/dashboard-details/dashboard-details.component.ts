import { ChartService } from './../../services/chart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { UsersService } from './../../services/users.service';
import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import Chart  from 'chart.js/auto';

import {Chart as ChartClass} from '../../model/chart.model';
import { getRelativePosition, resolve } from 'chart.js/helpers';
@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.css']
})
export class DashboardDetailsComponent implements OnInit {

  MONTHS:String[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  chartApi:ChartClass={};
  Nmonth:number= 6 ;
  ordersnumber?:Number=0;
  categorynumber?:Number=0;
  usersnumber?:Number=0;
  productsnumber?:Number=0;
  chart?:ChartClass[]

  arrayOfProducts:any[]=[];
  arrayOfOrders:Number[]=[];
  arrayOfCategorys:Number[]=[];
  arrayOfUsers:Number[]=[];
  arrayOfMonths:Number[]=[];

  arrayOfStringOfMonth:String[]=[]
  constructor(public OrderService:OrderService,
              public UsersService:UsersService,
              public ProductService:ProductService,
              public CategoryService:CategoryService,
              public ChartService:ChartService) {


                this.OrderService.getAllOrders().subscribe(async (data)=>{ this.ordersnumber=data.length;this.chartApi.orders= data.length })
        this.ProductService.getAllProducts().subscribe((data)=>{ this.productsnumber=data.length;this.chartApi.products=data.length })
        this.UsersService.getAllUsers().subscribe((data)=>{this.usersnumber=data.length;this.chartApi.users=data.length})
        this.CategoryService.getAllCategorys().subscribe((data)=>{ this.categorynumber=data.length;this.chartApi.categorys=data.length})
        this.ChartService.getAll().subscribe((data)=>this.chart=data)
        let date = new Date();
        this.chartApi.month=date.getMonth()



              this.runfunction()
  console.log('hi')
}

private async runfunction(){
// await this.firstFunction()

// await this.runOncePerMinute();
 }

firstFunction(){
  // this.OrderService.getAllOrders().subscribe(async (data)=>{ this.ordersnumber=data.length;this.chartApi.orders= await data.length })
  // this.ProductService.getAllProducts().subscribe((data)=>{ this.productsnumber=data.length;this.chartApi.products=data.length })
  // this.UsersService.getAllUsers().subscribe((data)=>{this.usersnumber=data.length;this.chartApi.users=data.length})
  // this.CategoryService.getAllCategorys().subscribe((data)=>{ this.categorynumber=data.length;this.chartApi.categorys=data.length})
  // this.ChartService.getAll().subscribe((data)=>this.chart=data)
  // let date = new Date();
  // this.chartApi.month=date.getMonth()
}



  async ngOnInit()
  {



    setTimeout(() => {

      this.chartApi.orders= this.ordersnumber
       console.log(this.chartApi+"44")



      this.chart?.forEach(element => {});

      let newChart:any = [];
      newChart=this.chart
      console.log(newChart.length)

     for (let i = newChart.length - 6,k=0; i < newChart.length;k++, i++) {

      this.arrayOfCategorys[k]= newChart[i].categorys
      this.arrayOfProducts[k]=newChart[i].products
      this.arrayOfUsers[k]= newChart[i].users
      this.arrayOfOrders[k]= newChart[i].orders
      this.arrayOfMonths[k]= newChart[i].month
      this.arrayOfStringOfMonth[k]=this.MONTHS[newChart[i].month]
    }
 console.log(this.arrayOfCategorys)
 console.log("categ")
 console.log(      )
 console.log(  this.arrayOfProducts    )
 console.log(  "products")
 console.log(  this.arrayOfUsers    )
 console.log(  "users"    )
 console.log(    this.arrayOfMonths  )
 console.log(    "months"  )











    }, 1000);

setTimeout(() => {
  console.log(this.chartApi)

this.runOnFirstDayOfMonth()
}, 3000);

    const labels = this.months({count: 7});
    var myChart = new Chart("myChart", {
      type: 'line',

      data: {
          labels: this.arrayOfStringOfMonth,
          datasets: [{
              label: 'Produits',
              data:  this.arrayOfProducts  , //[65, 59, 80, 81, 56, 55, 40],

              borderColor: 'rgb(75, 192, 192)',
              fill: true,

          }/*,
          {
            label: 'Dat21',
            data: [19, 12, 5, 3, 1, 6],
            backgroundColor:"#FFAF00",
            borderColor: "#FFAF00",
            borderWidth: 1
        }*/]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,

                  title: {
                    display: true,
                    text: 'Value'
                  },

                  ticks: {
                    // forces step size to be 50 units
                    stepSize:0.1
                  }
              },
              x:{

              }
          }
      }
    })

    var seconchart = new Chart("secondchart", {
    type: 'bar',

      data: {
          labels: this.arrayOfStringOfMonth,
          datasets: [{
              label: 'Categories',
              data:  this.arrayOfCategorys  , //[65, 59, 80, 81, 56, 55, 40],
              backgroundColor:'#ff6384',
              borderColor: 'rgb(75, 192, 192)',

          }/*,
          {
            label: 'Dat21',
            data: [19, 12, 5, 3, 1, 6],
            backgroundColor:"#FFAF00",
            borderColor: "#FFAF00",
            borderWidth: 1
        }*/]
      },
      options: {

          scales: {
              y: {
                  beginAtZero: true,

                  title: {
                    display: true,
                    text: 'Value'
                  },

                  ticks: {
                    // forces step size to be 50 units
                    stepSize:0.1
                  }
              },
              x:{

              }
          },
          animations: {
            radius: {
              duration: 4000,
              easing: 'linear',
              loop: (context) => context.active
            }
          }

      }
  });
    var thirdchart = new Chart("thirdchart", {
    type: 'line',

      data: {
          labels: this.arrayOfStringOfMonth,
          datasets: [{
              label: 'Clients',
              data:  this.arrayOfUsers  , //[65, 59, 80, 81, 56, 55, 40],

              borderColor: 'rgb(75, 192, 192)',
              fill: true,
          }/*,
          {
            label: 'Dat21',
            data: [19, 12, 5, 3, 1, 6],
            backgroundColor:"#FFAF00",
            borderColor: "#FFAF00",
            borderWidth: 1
        }*/]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,

                  title: {
                    display: true,

                  },

                  ticks: {
                    // forces step size to be 50 units
                    stepSize:0.1
                  }
              },
              x:{
                title: {
                  display: true,
                  text: 'Mois'
                },
              }
          }
      }
  });
    var fourchart = new Chart("fourchart", {
    type: 'line',

      data: {
          labels: this.arrayOfStringOfMonth,
          datasets: [{
              label: 'Clients',
              data:  this.arrayOfOrders  , //[65, 59, 80, 81, 56, 55, 40],

              borderColor: '#ff6384',
              fill: true,
          }/*,
          {
            label: 'Dat21',
            data: [19, 12, 5, 3, 1, 6],
            backgroundColor:"#FFAF00",
            borderColor: "#FFAF00",
            borderWidth: 1
        }*/]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,

                  title: {
                    display: true,

                  },

                  ticks: {
                    // forces step size to be 50 units
                    stepSize:0.1
                  }
              },
              x:{
                title: {
                  display: true,
                  text: 'Mois'
                },
              }
          }
      }
  });
  }


  runOnFirstDayOfMonth() {

    //this.ChartService.create(this.chartApi).subscribe((data)=>{console.log(data)})
    // Get the current date
    var today:any = new Date();

    // Get the first day of the next month
    var nextMonth:any = new Date(today.getFullYear(), today.getMonth() + 1,1);

    // Calculate the time difference between now and the first day of the next month
    var timeDiff = nextMonth - today;

    // Schedule the function to run again after the time difference
    setTimeout(this.runOnFirstDayOfMonth.bind(this), timeDiff);
  }





  runOncePerMinute() {
    // Your code to run once per minute goes here



this.ChartService.create(this.chartApi).subscribe((data)=>{console.log(data)})
    // Calculate the number of milliseconds until the next minute
    let now = new Date();
    let nextMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1, 0);
    let millisecondsUntilNextMinute = nextMinute.getTime() - now.getTime();

    // Set a timeout for the number of milliseconds until the next minute
    setTimeout(this.runOncePerMinute.bind(this), millisecondsUntilNextMinute);
  }


months(config:any) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];
  var i, value;
  for (i = 0; i < count; ++i) {
    value = this.MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }
  return values;
}
}
