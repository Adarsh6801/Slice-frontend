import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm='';
  constructor(activatedRoute:ActivatedRoute,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm']) this.searchTerm=params['searchTerm']
      console.log(this.searchTerm,"serach ternm search term ");
      
    })
  }
  search(term:string):void{
    if(term){
      this.router.navigateByUrl('/admin/search/'+term);
    }
  }
}
