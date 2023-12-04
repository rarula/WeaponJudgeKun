export type Weapon = {
    type: WeaponType;
    id: MainWeapon;
    sub: SubWeapon;
    special: SpecialWeapon;
    iconUrl: string;
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
    | 'squeezer_0'
    | 'squeezer_1';

type Splatling =
    | 'mini-splatling_0'
    | 'mini-splatling_1'
    | 'heavy-splatling_0'
    | 'heavy-splatling_1'
    | 'hydra-splatling'
    | 'ballpoint-splatling_0'
    | 'ballpoint-splatling_1'
    | 'nautilus'
    | 'heavy-edit-splatling';

type Charger =
    | 'squiffer'
    | 'splat-charger_0'
    | 'splat-charger_1'
    | 'splatterscope_0'
    | 'splatterscope_1'
    | 'e-liter'
    | 'e-liter-scope'
    | 'bamboozler-14'
    | 'goo-tuber_0'
    | 'goo-tuber_1'
    | 'snipewriter_0'
    | 'snipewriter_1';

type Roller =
    | 'carbon-roller_0'
    | 'carbon-roller_1'
    | 'splat-roller_0'
    | 'splat-roller_1'
    | 'dynamo-roller_0'
    | 'dynamo-roller_1'
    | 'flingza-roller'
    | 'big-swig-roller_0'
    | 'big-swig-roller_1';

type Blaster =
    | 'luna-blaster_0'
    | 'luna-blaster_1'
    | 'blaster_0'
    | 'blaster_1'
    | 'range-blaster'
    | 'clash-blaster_0'
    | 'clash-blaster_1'
    | 'rapid-blaster_0'
    | 'rapid-blaster_1'
    | 'rapid-blaster-pro_0'
    | 'rapid-blaster-pro_1'
    | 's-blast_0'
    | 's-blast_1';

type Slosher =
    | 'slosher_0'
    | 'slosher_1'
    | 'tri-slosher_0'
    | 'tri-slosher_1'
    | 'sloshing-machine_0'
    | 'sloshing-machine_1'
    | 'bloblobber_0'
    | 'bloblobber_1'
    | 'explosher'
    | 'dread-wringer';

type Dualie =
    | 'dapple-dualies_0'
    | 'dapple-dualies_1'
    | 'splat-dualies_0'
    | 'splat-dualies_1'
    | 'glooga-dualies'
    | 'dualie-squelchers_0'
    | 'dualie-squelchers_1'
    | 'tetra-dualies_0'
    | 'tetra-dualies_1';

type Brush =
    | 'inkbrush_0'
    | 'inkbrush_1'
    | 'octobrush_0'
    | 'octobrush_1'
    | 'painbrush_0'
    | 'painbrush_1';

type Stringer =
    | 'tri-stringer_0'
    | 'tri-stringer_1'
    | 'reef-lux_0'
    | 'reef-lux_1';

type Brella =
    | 'splat-brella_0'
    | 'splat-brella_1'
    | 'tenta-brella_0'
    | 'tenta-brella_1'
    | 'undercover-brella_0'
    | 'undercover-brella_1';

type Splatana =
    | 'splatana-stamper_0'
    | 'splatana-stamper_1'
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
    | 'splattercolor-screen'
    | 'super-chump'
    | 'tacticooler'
    | 'tenta-missiles'
    | 'triple-inkstrike'
    | 'triple-splashdown'
    | 'trizooka'
    | 'ultra-stamp'
    | 'wave-breaker'
    | 'zipcaster';
