import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/+shared/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  allcategory:any[]=[];
  allSubctegory:any[]=[];
  isHover=false;
  constructor(private filterService:FilterService,private router:Router) { }
  goToThisCategory(category){
    
    this.router.navigate(['/allcategory',category])

  }
  goToFillter(subcategory){
    console.log("cliced")
    this.router.navigate(['/filter',subcategory])
  }
  leaveList(){
    this.isHover=false;
    console.log("lesrfr")
  }
  getSubcategory(cateid){
     this.filterService.getAllSubcategoryByCateId(cateid).subscribe(
      data=>{
        //console.log("Success",data);
        this.allSubctegory=data;
        // console.log(this.allSubctegory)
      },
      error=>
      {
         console.log('error',error)
      }

     );
     this.isHover=true;
  }
  ngOnInit(): void {
    this.filterService.getAllCategory().subscribe(

      data=>{
        //console.log("Success",data);
        this.allcategory=data;
        console.log(this.allcategory)
      },
      error=>
      {
         console.log('error',error)
      }
    );
    
  }

}
