import { Injectable } from '@angular/core';
import { constants } from 'buffer';
import { BehaviorSubject } from 'rxjs';
import { constCringeNames, constFactionNames } from 'src/constants/constants';

@Injectable ({
    providedIn: 'root'
})

export class GlobalService {
    public currentNames = new BehaviorSubject<any>({
        knight: constFactionNames.knight
    })

    public factionNames = new BehaviorSubject<any>({
        knight: constFactionNames.knight
    })

    public cringeNames = new BehaviorSubject<any>({
        knight: constCringeNames.knight
    })

    updateToFactionNames(){
        this.currentNames.value.knight = this.factionNames.value.knight;
    }

    updateToCringeNames(){
        this.currentNames.value.knight = this.cringeNames.value.knight;
    }
}