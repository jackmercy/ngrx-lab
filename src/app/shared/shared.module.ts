import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatDividerModule
} from '@angular/material';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        /* Material components */
        MatButtonModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatDividerModule,
    ],
    exports: [
        /* Material components */
        MatButtonModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatDividerModule,
    ]
})
export class SharedModule { }
