import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { PagesService } from "../../pages.service";
import { TreeModel, NodeEvent } from "ng2-tree";

@Component({
  selector: "app-page-node",
  templateUrl: "./page-node.component.html",
  styleUrls: ["./page-node.component.scss"]
})
export class PageNodeComponent implements OnInit, OnDestroy {
  @Input() pages: any[] = [];
  @Output() nodeSelect: EventEmitter<any> = new EventEmitter();
  private sub: any;
  private activeNodeId: number;

  public tree: TreeModel = {
    value: "",
    children: [
      {
        value: "Object-oriented programming",
        children: [{ value: "Java" }, { value: "C++" }, { value: "C#" }]
      },
      {
        value: "Prototype-based programming",
        children: [
          { value: "JavaScript" },
          { value: "CoffeeScript" },
          { value: "Lua" }
        ]
      }
    ]
  };

  constructor(private pagesService: PagesService) {}

  ngOnInit() {
    this.sub = this.pagesService.activePage.subscribe(activeNode => {
      this.activeNodeId = +activeNode;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  selectNode(node) {
    this.nodeSelect.emit(node);
  }

  onChildNodeSelect(node, event) {
    this.selectNode(node);
  }

  isActiveNode(id) {
    return this.activeNodeId === id;
  }
}
