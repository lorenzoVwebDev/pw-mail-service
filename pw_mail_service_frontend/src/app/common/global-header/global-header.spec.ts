import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalHeader } from './global-header';

describe('GlobalHeader', () => {
  let component: GlobalHeader;
  let fixture: ComponentFixture<GlobalHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalHeader]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GlobalHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
