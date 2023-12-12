import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagAPIComponent } from './pag-api.component';

describe('PagAPIComponent', () => {
  let component: PagAPIComponent;
  let fixture: ComponentFixture<PagAPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagAPIComponent]
    });
    fixture = TestBed.createComponent(PagAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
