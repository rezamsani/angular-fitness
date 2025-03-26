import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
@Injectable()
export class PersianPaginatorIntl extends MatPaginatorIntl{

    override itemsPerPageLabel="مورد در هر صحفه";
    override nextPageLabel = "صحفه بعد";
    override previousPageLabel = "صحفه قبل";
    override firstPageLabel= "صحفه اول";
    override lastPageLabel="صحفه اخر";
    
    override getRangeLabel = (page: number, pageSize: number, length: number): string => {
        if (length === 0 || pageSize === 0) {
          return `0 از ${length}`;
        }
        const startIndex = page * pageSize;
        const endIndex = Math.min(startIndex + pageSize, length);
        return `${startIndex + 1} - ${endIndex} از ${length}`;
      };
        
}