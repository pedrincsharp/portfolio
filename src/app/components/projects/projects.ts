import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly dataService = inject(DataService);

  public readonly projetos = computed(() => this.dataService.data().projetos);
}
