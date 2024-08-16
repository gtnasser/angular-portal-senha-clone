import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalSenhaComponent } from './portal-senha.component';

describe('PortalSenhaComponent', () => {
  let component: PortalSenhaComponent;
  let fixture: ComponentFixture<PortalSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalSenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortalSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
