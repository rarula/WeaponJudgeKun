export type Weapon = {
    type: WeaponType;
    id: MainWeapon;
    sub: SubWeapon;
    special: SpecialWeapon;
};

export type WeaponType =
    | 'SHOOTER'
    | 'SPLATLING'
    | 'CHARGER'
    | 'ROLLER'
    | 'BLASTER'
    | 'SLOSHER'
    | 'DUALIE'
    | 'BRUSH'
    | 'STRINGER'
    | 'BRELLA'
    | 'SPLATANA';

type MainWeapon =
    | Shooter
    | Splatling
    | Charger
    | Roller
    | Blaster
    | Slosher
    | Dualie
    | Brush
    | Stringer
    | Brella
    | Splatana;

type Shooter =
    | 'sploosh-o-matic_0'
    | 'sploosh-o-matic_1'
    | 'splattershot-jr_0'
    | 'splattershot-jr_1'
    | 'splash-o-matic_0'
    | 'splash-o-matic_1'
    | 'aerospray_0'
    | 'aerospray_1'
    | 'splattershot_0'
    | 'splattershot_1'
    | 'hero-shot-replica'
    | '52-gal'
    | 'n-zap_0'
    | 'n-zap_1'
    | 'splattershot-pro_0'
    | 'splattershot-pro_1'
    | '96-gal_0'
    | '96-gal_1'
    | 'jet-squelcher_0'
    | 'jet-squelcher_1'
    | 'splattershot-nova_0'
    | 'splattershot-nova_1'
    | 'l-3-nozzlenose_0'
    | 'l-3-nozzlenose_1'
    | 'h-3-nozzlenose_0'
    | 'h-3-nozzlenose_1'
    | 'squeezer';

type Splatling =
    | 'mini-splatling_0'
    | 'mini-splatling_1'
    | 'heavy-splatling_0'
    | 'heavy-splatling_1'
    | 'hydra-splatling'
    | 'ballpoint-splatling'
    | 'nautilus';

type Charger =
    | 'squiffer'
    | 'splat-charger_0'
    | 'splat-charger_1'
    | 'splatterscope_0'
    | 'splatterscope_1'
    | 'e-liter'
    | 'e-liter-scope'
    | 'bamboozler-14'
    | 'goo-tuber'
    | 'snipewriter';

type Roller =
    | 'carbon-roller_0'
    | 'carbon-roller_1'
    | 'splat-roller_0'
    | 'splat-roller_1'
    | 'dynamo-roller'
    | 'flingza-roller'
    | 'big-swig-roller_0'
    | 'big-swig-roller_1';

type Blaster =
    | 'luna-blaster_0'
    | 'luna-blaster_1'
    | 'blaster'
    | 'range-blaster'
    | 'clash-blaster_0'
    | 'clash-blaster_1'
    | 'rapid-blaster_0'
    | 'rapid-blaster_1'
    | 'rapid-blaster-pro_0'
    | 'rapid-blaster-pro_1'
    | 's-blast';

type Slosher =
    | 'slosher_0'
    | 'slosher_1'
    | 'tri-slosher_0'
    | 'tri-slosher_1'
    | 'sloshing-machine'
    | 'bloblobber'
    | 'explosher';

type Dualie =
    | 'dapple-dualies_0'
    | 'dapple-dualies_1'
    | 'splat-dualies'
    | 'glooga-dualies'
    | 'dualie-squelchers_0'
    | 'dualie-squelchers_1'
    | 'tetra-dualies_0'
    | 'tetra-dualies_1';

type Brush =
    | 'inkbrush_0'
    | 'inkbrush_1'
    | 'octobrush'
    | 'painbrush';

type Stringer =
    | 'tri-stringer'
    | 'reef-lux';

type Brella =
    | 'splat-brella'
    | 'tenta-brella_0'
    | 'tenta-brella_1'
    | 'undercover-brella';

type Splatana =
    | 'splatana-stamper'
    | 'splatana-wiper_0'
    | 'splatana-wiper_1';

export type SubWeapon =
    | 'splat-bomb'
    | 'suction-bomb'
    | 'burst-bomb'
    | 'curling-bomb'
    | 'autobomb'
    | 'ink-mine'
    | 'toxic-mist'
    | 'point-sensor'
    | 'splash-wall'
    | 'sprinkler'
    | 'squid-beakon'
    | 'fizzy-bomb'
    | 'torpedo'
    | 'angle-shooter';

export type SpecialWeapon =
    | 'big-bubbler'
    | 'booyah-bomb'
    | 'crab-tank'
    | 'ink-storm'
    | 'ink-vac'
    | 'inkjet'
    | 'killer-wail-5.1'
    | 'kraken-royale'
    | 'reefslider'
    | 'super-chump'
    | 'tacticooler'
    | 'tenta-missiles'
    | 'triple-inkstrike'
    | 'trizooka'
    | 'ultra-stamp'
    | 'wave-breaker'
    | 'zipcaster';
