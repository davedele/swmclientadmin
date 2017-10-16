import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PagesComponent, PagesEditComponent, PagesContentareaComponent, PagesTreeComponent, routing } from './';
import { PagesService } from './pages.service';
import { PageNodeComponent } from './pages-tree/page-node/page-node.component';
import { PagesEditContentsComponent } from './pages-edit-contents/pages-edit-contents.component';
import { PagesAddComponent } from './pages-add/pages-add.component';
import { SharedModule } from '../shared';
import { BaseModalComponent } from '../shared/base-modal/base-modal.component';
import { ContentTypePipe } from './content-type.pipe';
@NgModule({
    imports: [ CommonModule, FormsModule, routing, SharedModule],
    declarations: [ PagesComponent, PagesEditComponent, PagesContentareaComponent, PagesTreeComponent, PageNodeComponent, PagesEditContentsComponent, PagesAddComponent, ContentTypePipe ],
    providers: [ PagesService ],
    entryComponents:[BaseModalComponent]
})
export class PagesModule {}