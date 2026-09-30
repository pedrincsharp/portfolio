import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Projects } from '../../components/projects/projects';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Hero, About, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
