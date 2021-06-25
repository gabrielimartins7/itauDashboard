import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { PolosComponent } from 'src/app/modules/polos/polos.component';
import { RouterModule } from '@angular/router';
import { PoloComponent } from 'src/app/modules/polo/polo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule, IConfig } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [DefaultComponent, PolosComponent, PoloComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
})
export class DefaultModule {}
