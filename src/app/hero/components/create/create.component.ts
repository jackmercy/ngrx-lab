import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    defaultAvatar = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    public createHeroForm: FormGroup;
    public previewAvatar: string;

    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _heroService: HeroService,
    ) {}

    ngOnInit() {
        this.createHeroForm = this._formBuilder.group({
            name: ['', Validators.required],
            power: ['', Validators.required],
            avatar: ['']
        });

        this.previewAvatar = this.defaultAvatar;

        this.avatar.valueChanges.subscribe(
            imageSrc => this.previewAvatar = imageSrc
        );
    }

    goBackButtonClicked(): void {
        this._router.navigate(['/hero/list']);
    }

    createHeroClicked(): void {
        if (this.createHeroForm.valid) {
            const payload = {
                name: this.name.value,
                power: this.power.value,
                avatar: this.avatar.value ? this.avatar.value : this.defaultAvatar
            };

            this._heroService.createHero(payload);
            this._router.navigate(['/hero/list']);
        }
    }

    get name() {
        return this.createHeroForm.get('name');
    }

    get power() {
        return this.createHeroForm.get('power');
    }

    get avatar() {
        return this.createHeroForm.get('avatar');
    }

}
