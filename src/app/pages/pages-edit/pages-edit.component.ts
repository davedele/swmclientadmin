import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../page';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-pages-edit',
  templateUrl: './pages-edit.component.html',
  styleUrls: ['./pages-edit.component.css']
})
export class PagesEditComponent implements OnInit, OnDestroy {
  id: number;
  page: Page;
  layout: any;
  contents: any[]=[];
  private sub: any;
  
  constructor(private route: ActivatedRoute, private pagesService: PagesService) {}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {

      this.id = +params['id']; // (+) converts string 'id' to a number
      this.page = this.pagesService.getPage(this.id);
      this.pagesService.activePage.next(this.id);
      this.layout = this.pagesService.getLayout(this.page.layoutId);
    });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  //forTabs
  activeTab:string="content";
  toggleTab(e, tab){
    e.preventDefault();
    e.stopPropagation();
    this.activeTab = tab;
  }
}
