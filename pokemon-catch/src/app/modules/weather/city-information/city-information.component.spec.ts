import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityInformationComponent } from './city-information.component';

describe('CityInformationComponent', () => {
  let component: CityInformationComponent;
  let fixture: ComponentFixture<CityInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
