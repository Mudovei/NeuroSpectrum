import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaDeCodigoRedifinir } from './tela-de-codigo-redifinir';

describe('TelaDeCodigoRedifinir', () => {
  let component: TelaDeCodigoRedifinir;
  let fixture: ComponentFixture<TelaDeCodigoRedifinir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaDeCodigoRedifinir],
    }).compileComponents();

    fixture = TestBed.createComponent(TelaDeCodigoRedifinir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
