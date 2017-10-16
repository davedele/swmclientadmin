import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page} from './page';
import { PagesService } from './pages.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  constructor(private router:Router, private pagesService: PagesService) { }

  ngOnInit() {
  }

  onPageSelected( node ){

    this.router.navigate(['/pages', node.id ] );
    // .then((x)=>{  
    //     console.log('onPageSelected', node, x);
    //     this.pagesService.activePage.next(node.id);
    //   }, (reason)=> console.log('onPageSelected.navigateRejected',reason,node) )
    // .catch(reason=>console.log('catch.reason',reason) );
  }
}
