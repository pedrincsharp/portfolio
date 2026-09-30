import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly dataService = inject(DataService);

  public readonly headerData = computed(() => this.dataService.data().header);
  public readonly isMenuOpen = signal<boolean>(false);

  public toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  public fecharMenu(): void {
    this.isMenuOpen.set(false);
  }
}
