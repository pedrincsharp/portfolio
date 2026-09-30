import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly dataService = inject(DataService);

  public readonly aboutData = computed(() => this.dataService.data().about);
}
