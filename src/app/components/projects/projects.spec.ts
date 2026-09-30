import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { Projects } from './projects';
import { DataService } from '../../services/data.service';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
      providers: [provideHttpClient()],
    }).compileComponents();

    dataService = TestBed.inject(DataService);
    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show empty state when projects array is empty', async () => {
    dataService.data.update((d) => ({ ...d, projetos: [] }));
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Projetos em desenvolvimento...');
    expect(compiled.querySelector('article')).toBeNull();
  });

  it('should render project cards horizontally when projects are provided', async () => {
    dataService.data.update((d) => ({
      ...d,
      projetos: [
        {
          nome: 'Projeto ERP & PDV',
          img: 'assets/minha-imagem.png',
          link: 'https://github.com/pedrincsharp/erp-demo',
          desc: 'Sistema completo de gestão comercial e integração com NFSe/NFCe.',
          tags: ['C#', '.NET', 'SQL Server']
        },
        {
          nome: 'API de Pagamentos',
          img: 'assets/minha-imagem.png',
          link: 'https://github.com/pedrincsharp/payment-api',
          desc: 'Microsserviço de conciliação financeira e pagamentos.',
          tags: ['ASP.NET Core', 'Docker', 'PostgreSQL']
        }
      ]
    }));
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('article');
    expect(cards.length).toBe(2);
    expect(compiled.textContent).toContain('Projeto ERP & PDV');
    expect(compiled.textContent).toContain('API de Pagamentos');

    const link = compiled.querySelector('article a') as HTMLAnchorElement;
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toContain('noopener');
  });
});
