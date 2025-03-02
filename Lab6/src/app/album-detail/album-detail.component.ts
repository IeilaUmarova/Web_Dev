import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';

interface Album {
  userId: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css']
})
export class AlbumsDetailComponent implements OnInit {
  album: Album | null = null;
  loading: boolean = false;
  error: string | null = null;
  editedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.fetchAlbum();
  }

  fetchAlbum(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = 'Invalid album ID';
      return;
    }

    this.loading = true;
    this.albumsService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Ошибка загрузки альбома';
        console.error(err);
        this.loading = false;
      }
    });
  }

  saveChanges(): void {
    if (!this.album) return;

    const updatedAlbum: Album = { ...this.album, title: this.editedTitle };
    this.albumsService.updateAlbum(updatedAlbum).subscribe({
      next: () => {
        this.album!.title = this.editedTitle;
        alert('Название альбома обновлено!');
      },
      error: (err) => {
        this.error = 'Ошибка обновления альбома';
        console.error(err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
