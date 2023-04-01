import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})

export class GlobalService {
    public currentNames = new BehaviorSubject<any>({
        knight: 'knights'
    })

    public factionNames = new BehaviorSubject<any>({
        knight: 'Knights'
    })

    public cringeNames = new BehaviorSubject<any>({
        knight: 'cringe knight'
    })

    updateToFactionNames(){
        this.currentNames.value.knight = this.factionNames.value.knight;
    }

    updateToCringeNames(){
        this.currentNames.value.knight = this.cringeNames.value.knight;
    }
}