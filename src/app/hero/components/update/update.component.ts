import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { IHero } from '../../interface/hero.interface';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';

const handlerBeforeUnload = (ev: any) => {
    // Cancel the event
    ev.preventDefault();
    // Chrome requires returnValue to be set
    ev.returnValue = 'refresh event';
};

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
    defaultAvatar = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    public updateHeroForm: FormGroup;

    public isDirty = new BehaviorSubject<boolean>(false);
    private originalHeroData: any;

    constructor(
        private _formBuilder: FormBuilder,
        private _heroService: HeroService,
        private _dialogRef: MatDialogRef<UpdateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IHero
    ) { }

    ngOnInit() {
        this.updateHeroForm = this._formBuilder.group({
            name: [this.data.name, Validators.required],
            power: [this.data.power, Validators.required],
            avatar: [this.data.avatar]
        });

        this.originalHeroData = {
            name: this.data.name,
            power: this.data.power,
            avatar: this.data.avatar
        };

        this.updateHeroForm.valueChanges.subscribe(
            newValue => !_.isEqual(this.originalHeroData, newValue) ? this.isDirty.next(true) : this.isDirty.next(false)
        );

        this.isDirty.subscribe(__isDirty => {
            if (__isDirty) {
                return window.addEventListener('beforeunload', handlerBeforeUnload);
            } else {
                return window.removeEventListener('beforeunload', handlerBeforeUnload);
            }
        });
    }

    ngOnDestroy() {
        window.removeEventListener('beforeunload', handlerBeforeUnload);
    }


    goBackButtonClicked(): void {
        this._dialogRef.close();
    }

    updateHeroClicked(): void {
        this._heroService.updateHero({
            ...this.updateHeroForm.getRawValue(),
            id: this.data.id
        });

        this._dialogRef.close();
    }

    get name() {
        return this.updateHeroForm.get('name');
    }

    get power() {
        return this.updateHeroForm.get('power');
    }

    get avatar() {
        return this.updateHeroForm.get('avatar');
    }

}
