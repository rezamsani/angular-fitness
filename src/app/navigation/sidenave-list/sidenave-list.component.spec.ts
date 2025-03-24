import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenaveListComponent } from './sidenave-list.component';

describe('SidenaveListComponent', () => {
  let component: SidenaveListComponent;
  let fixture: ComponentFixture<SidenaveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenaveListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
