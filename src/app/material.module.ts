
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from './persian-dateadapter';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({

    imports: [MatSlideToggleModule, MatButtonModule,
        MatIcon, MatFormFieldModule, MatInputModule,
        MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
        MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule

    ],
    exports: [MatSlideToggleModule, MatButtonModule,
        MatIcon, MatFormFieldModule, MatInputModule,
        MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
        MatSidenavModule, MatToolbarModule, MatIconModule,MatListModule, MatTabsModule

    ]

})
export class MaterialModule {

}
