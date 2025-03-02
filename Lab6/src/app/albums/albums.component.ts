import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

interface Album {
  userId: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.loading = true;
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Ошибка загрузки альбомов';
        console.error(err);
        this.loading = false;
      }
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(album => album.id !== id);
      },
      error: (err) => {
        this.error = 'Ошибка удаления альбома';
        console.error(err);
      }
    });
  }
}
