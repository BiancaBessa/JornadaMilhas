import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRodapeComponent } from './banner-rodape.component';

describe('BannerRodapeComponent', () => {
  let component: BannerRodapeComponent;
  let fixture: ComponentFixture<BannerRodapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerRodapeComponent]
    });
    fixture = TestBed.createComponent(BannerRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
