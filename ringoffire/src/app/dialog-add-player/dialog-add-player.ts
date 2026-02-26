import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './dialog-add-player.html',
  styleUrls: ['./dialog-add-player.scss'],
})
export class DialogAddPlayer {
  name = '';

  constructor(private dialogRef: MatDialogRef<DialogAddPlayer>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}