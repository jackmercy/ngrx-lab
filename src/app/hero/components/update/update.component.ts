import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IHero } from '../../interface/hero.interface';
import * as _ from 'lodash';
/* NgRx */
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/hero.state';
import * as heroActions from '../../store/actions/hero.actions';
import * as heroSelectors from '../../store/selectors/hero.selector';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const handlerBeforeUnload = (ev: any) => {
    // Cancel the event
    ev.preventDefault();
    // Chrome requires returnValue to be set
    ev.returnValue = 'refresh event';
};

const defaultAvatar = 'https://material.angular.io/assets/img/examples/shiba1.jpg';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {

    public updateHeroForm: FormGroup;
    private ngRxDestroy$ = new Subject();

    constructor(
        private _formBuilder: FormBuilder,
        private _store: Store<State>,
        private _dialogRef: MatDialogRef<UpdateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IHero
    ) { }

    ngOnInit() {
        this.updateHeroForm = this._formBuilder.group({
            id: [this.data.id],
            name: [this.data.name, Validators.required],
            power: [this.data.power, Validators.required],
            avatar: [this.data.avatar]
        });

        this.updateHeroForm.valueChanges.subscribe(
            newValue => !_.isEqual(this.data, newValue) ?
                this._store.dispatch(heroActions.changeDirtyState({ payload: true })) :
                this._store.dispatch(heroActions.changeDirtyState({ payload: false }))
        );

        this._store.select(heroSelectors.isUpdateHeroSUCCESS).pipe(takeUntil(this.ngRxDestroy$)).subscribe(
            (isSuccess: boolean) => isSuccess ? this._dialogRef.close() : null
        );
    }

    ngOnDestroy() {
        this._store.dispatch(heroActions.changeDirtyState({ payload: false }));

        this.ngRxDestroy$.next();
    }


    goBackButtonClicked(): void {
        this._dialogRef.close();
    }

    updateHeroClicked(): void {
        const _payload = this.updateHeroForm.getRawValue();
        if (!_payload.avatar) {
            _payload.avatar = defaultAvatar;
        }

        this._store.dispatch(heroActions.updateHero({ payload: _payload }));
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
