import { Injectable } from '@angular/core';
import { constants } from 'buffer';
import { BehaviorSubject } from 'rxjs';
import { constCringeNames, constFactionNames } from 'src/constants/constants';

@Injectable ({
    providedIn: 'root'
})

export class GlobalService {
    public currentNames = new BehaviorSubject<any>({
        japan: constFactionNames.japan,
        knight: constFactionNames.knight,
        viking: constFactionNames.viking,
        greek: constFactionNames.greek,
        mongol: constFactionNames.mongol,
        aztec: constFactionNames.aztec
    })

    public factionNames = new BehaviorSubject<any>({
        japan: constFactionNames.japan,
        knight: constFactionNames.knight,
        viking: constFactionNames.viking,
        greek: constFactionNames.greek,
        mongol: constFactionNames.mongol,
        aztec: constFactionNames.aztec
    })

    public cringeNames = new BehaviorSubject<any>({
        japan: constCringeNames.japan,
        knight: constCringeNames.knight,
        viking: constCringeNames.viking,
        greek: constCringeNames.greek,
        mongol: constCringeNames.mongol,
        aztec: constCringeNames.aztec
    })

    updateToFactionNames(){
        this.currentNames.value.japan = this.factionNames.value.japan;
        this.currentNames.value.knight = this.factionNames.value.knight;
        this.currentNames.value.viking = this.factionNames.value.viking;
        this.currentNames.value.greek = this.factionNames.value.greek;
        this.currentNames.value.mongol = this.factionNames.value.mongol;
        this.currentNames.value.aztec = this.factionNames.value.aztec;
    }

    updateToCringeNames(){
        this.currentNames.value.japan = this.cringeNames.value.japan;
        this.currentNames.value.knight = this.cringeNames.value.knight;
        this.currentNames.value.viking = this.cringeNames.value.viking;
        this.currentNames.value.greek = this.cringeNames.value.greek;
        this.currentNames.value.mongol = this.cringeNames.value.mongol;
        this.currentNames.value.aztec = this.cringeNames.value.aztec;
    }
}