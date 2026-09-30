import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { DataService, DEFAULT_PORTFOLIO_DATA } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide default portfolio data initially', () => {
    const data = service.data();
    expect(data.hero.nome).toBe('João Pedro Alves de Moraes');
    expect(data.header.logo).toBe('JP');
    expect(data.about.experiencias.length).toBeGreaterThan(0);
  });
});
