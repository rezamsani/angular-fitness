
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({

    imports: [MatSlideToggleModule, MatButtonModule,
        MatIcon, MatFormFieldModule, MatInputModule,
        MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
        MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatCardModule,
        MatSelectModule,MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule,MatTableModule,
        MatSort, MatSortModule, MatPaginator, MatPaginatorModule, MatSnackBarModule


    ],
    exports: [MatSlideToggleModule, MatButtonModule,
        MatIcon, MatFormFieldModule, MatInputModule,
        MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
        MatSidenavModule, MatToolbarModule, MatIconModule,MatListModule, MatTabsModule, MatCardModule,
        MatSelectModule,MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule,MatTableModule,
        MatSort, MatSortModule, MatPaginator, MatPaginatorModule, MatSnackBarModule

    ]

})
export class MaterialModule {

}
