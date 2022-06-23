import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamportfolioComponent } from './teamportfolio.component';

describe('TeamportfolioComponent', () => {
  let component: TeamportfolioComponent;
  let fixture: ComponentFixture<TeamportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamportfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
