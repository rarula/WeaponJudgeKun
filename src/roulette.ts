import { SpecialWeapon, SubWeapon, Weapon, WeaponType } from './types/Weapon';
import { getRandomElem } from './utils/array';
import { BLASTERS, BRELLAS, BRUSHES, CHARGERS, DUALIES, ROLLERS, SHOOTERS, SLOSHERS, SPLATANAS, SPLATLINGS, STRINGERS } from './weapons';

const WEAPONS = [
    ...SHOOTERS,
    ...SPLATLINGS,
    ...CHARGERS,
    ...ROLLERS,
    ...BLASTERS,
    ...SLOSHERS,
    ...DUALIES,
    ...BRUSHES,
    ...STRINGERS,
    ...BRELLAS,
    ...SPLATANAS,
];

export function roulette(typeFilters: WeaponType[], subFilters: SubWeapon[], specialFilters: SpecialWeapon[]): Weapon {
    const weapons = WEAPONS
        .filter((weapon) => {
            if (typeFilters.length === 0) {
                return true;
            }

            for (const filter of typeFilters) {
                if (filter === weapon.type) {
                    return true;
                }
            }

            return false;
        })
        .filter((weapon) => {
            if (subFilters.length === 0) {
                return true;
            }

            for (const filter of subFilters) {
                if (filter === weapon.sub) {
                    return true;
                }
            }

            return false;
        })
        .filter((weapon) => {
            if (specialFilters.length === 0) {
                return true;
            }

            for (const filter of specialFilters) {
                if (filter === weapon.special) {
                    return true;
                }
            }

            return false;
        });

    return getRandomElem(weapons);
}
