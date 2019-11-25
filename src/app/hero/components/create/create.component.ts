import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IHero } from '../../interface/hero.interface';
/* NgRx */
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/hero.state';
import * as heroActions from '../../store/actions/hero.actions';
import * as heroSelectors from '../../store/selectors/hero.selector';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

const defaultAvatar = 'https://material.angular.io/assets/img/examples/shiba1.jpg';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {
    public createHeroForm: FormGroup;
    public previewAvatar: string = defaultAvatar;
    private ngRxDestroy$ = new Subject();

    constructor(
        private _formBuilder: FormBuilder,
        private _store: Store<State>
    ) {
        this.createHeroForm = this._formBuilder.group({
            name: ['', Validators.required],
            power: ['', Validators.required],
            avatar: ['']
        });
    }

    ngOnInit() {
        this.avatar.valueChanges.pipe(takeUntil(this.ngRxDestroy$)).subscribe(
            imageSrc => imageSrc ? this.previewAvatar = imageSrc : this.previewAvatar = defaultAvatar
        );

        this._store.select(heroSelectors.isCreateHeroSUCCESS).pipe(takeUntil(this.ngRxDestroy$)).subscribe(
            (isSuccess: boolean) => isSuccess ? this._store.dispatch(heroActions.navigateToPage({ payload: '/hero/list' })) : null
        );
    }

    ngOnDestroy() {
        this.ngRxDestroy$.next();
    }

    goBackButtonClicked(): void {
        this._store.dispatch(heroActions.navigateToPage({ payload: '/hero/list' }));
    }

    createHeroClicked(): void {
        if (this.createHeroForm.valid) {
            const _payload: IHero = {
                id: '',
                name: this.name.value,
                power: this.power.value,
                avatar: this.avatar.value ? this.avatar.value : defaultAvatar
            };

            this._store.dispatch(heroActions.createHero({ payload:  _payload}));
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
