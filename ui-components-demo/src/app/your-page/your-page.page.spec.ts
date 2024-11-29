import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourPagePage } from './your-page.page';

describe('YourPagePage', () => {
  let component: YourPagePage;
  let fixture: ComponentFixture<YourPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
