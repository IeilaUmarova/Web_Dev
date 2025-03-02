import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-albums-photo',
  templateUrl: './albums-photo.component.html',
  styleUrls: ['./albums-photo.component.css']
})
export class AlbumsPhotoComponent implements OnInit {
  photos: Photo[] = [];
  loading: boolean = false;
  error: string | null = null;
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.albumId) {
      this.error = 'Invalid album ID';
      return;
    }

    this.loading = true;
    this.albumsService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Ошибка загрузки фотографий';
        console.error(err);
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
