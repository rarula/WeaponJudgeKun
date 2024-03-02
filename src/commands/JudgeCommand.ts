import { SlashCommandBuilder } from 'discord.js';

import { locale } from '../locales';
import { Command } from '../types/Command';
import { SpecialWeapon, SubWeapon, Weapon, WeaponType } from '../types/Weapon';
import { getRandomElem } from '../utils/array';
import { ALL_WEAPONS } from '../weapons';

const COLORS = [
    0x1a1aae,
    0xe38d24,
    0xa0c937,
    0xba30b0,
    0xbecd41,
    0x6325cd,
    0xde6624,
    0x343bc4,
    0xcd510a,
    0x6e04b6,
    0xc12d74,
    0x2cb721,
    0x1bbeab,
    0xc43a6e,
    0x1ec0ad,
    0xd74b31,
    0xd0be08,
    0x3a0ccd,
    0xceb121,
    0x9025c6,
];

export const JudgeCommand: Command = {
    command: new SlashCommandBuilder()
        .setName('judge')
        .setDescription(locale('text.command.judge.description'))
        .addStringOption((option) =>
            option
                .setName(locale('text.command.judge.question-0.name'))
                .setDescription(locale('text.command.judge.question-0.description'))
                .addChoices(
                    { name: locale('text.shooter'), value: 'SHOOTER' },
                    { name: locale('text.splatling'), value: 'SPLATLING' },
                    { name: locale('text.charger'), value: 'CHARGER' },
                    { name: locale('text.roller'), value: 'ROLLER' },
                    { name: locale('text.blaster'), value: 'BLASTER' },
                    { name: locale('text.slosher'), value: 'SLOSHER' },
                    { name: locale('text.dualie'), value: 'DUALIE' },
                    { name: locale('text.brush'), value: 'BRUSH' },
                    { name: locale('text.stringer'), value: 'STRINGER' },
                    { name: locale('text.brella'), value: 'BRELLA' },
                    { name: locale('text.splatana'), value: 'SPLATANA' },
                )
        )
        .addStringOption((option) =>
            option
                .setName(locale('text.command.judge.question-1.name'))
                .setDescription(locale('text.command.judge.question-1.description'))
                .addChoices(
                    { name: locale('sub-weapon.splat-bomb'), value: 'splat-bomb' },
                    { name: locale('sub-weapon.suction-bomb'), value: 'suction-bomb' },
                    { name: locale('sub-weapon.burst-bomb'), value: 'burst-bomb' },
                    { name: locale('sub-weapon.curling-bomb'), value: 'curling-bomb' },
                    { name: locale('sub-weapon.autobomb'), value: 'autobomb' },
                    { name: locale('sub-weapon.ink-mine'), value: 'ink-mine' },
                    { name: locale('sub-weapon.toxic-mist'), value: 'toxic-mist' },
                    { name: locale('sub-weapon.point-sensor'), value: 'point-sensor' },
                    { name: locale('sub-weapon.splash-wall'), value: 'splash-wall' },
                    { name: locale('sub-weapon.sprinkler'), value: 'sprinkler' },
                    { name: locale('sub-weapon.squid-beakon'), value: 'squid-beakon' },
                    { name: locale('sub-weapon.fizzy-bomb'), value: 'fizzy-bomb' },
                    { name: locale('sub-weapon.torpedo'), value: 'torpedo' },
                    { name: locale('sub-weapon.angle-shooter'), value: 'angle-shooter' },
                )
        )
        .addStringOption((option) =>
            option
                .setName(locale('text.command.judge.question-2.name'))
                .setDescription(locale('text.command.judge.question-2.description'))
                .addChoices(
                    { name: locale('special-weapon.big-bubbler'), value: 'big-bubbler' },
                    { name: locale('special-weapon.booyah-bomb'), value: 'booyah-bomb' },
                    { name: locale('special-weapon.crab-tank'), value: 'crab-tank' },
                    { name: locale('special-weapon.ink-storm'), value: 'ink-storm' },
                    { name: locale('special-weapon.ink-vac'), value: 'ink-vac' },
                    { name: locale('special-weapon.inkjet'), value: 'inkjet' },
                    { name: locale('special-weapon.killer-wail-5.1'), value: 'killer-wail-5.1' },
                    { name: locale('special-weapon.kraken-royale'), value: 'kraken-royale' },
                    { name: locale('special-weapon.reefslider'), value: 'reefslider' },
                    { name: locale('special-weapon.splattercolor-screen'), value: 'splattercolor-screen' },
                    { name: locale('special-weapon.super-chump'), value: 'super-chump' },
                    { name: locale('special-weapon.tacticooler'), value: 'tacticooler' },
                    { name: locale('special-weapon.tenta-missiles'), value: 'tenta-missiles' },
                    { name: locale('special-weapon.triple-inkstrike'), value: 'triple-inkstrike' },
                    { name: locale('special-weapon.triple-splashdown'), value: 'triple-splashdown' },
                    { name: locale('special-weapon.trizooka'), value: 'trizooka' },
                    { name: locale('special-weapon.ultra-stamp'), value: 'ultra-stamp' },
                    { name: locale('special-weapon.wave-breaker'), value: 'wave-breaker' },
                    { name: locale('special-weapon.zipcaster'), value: 'zipcaster' },
                )
        ),

    execute: async (interaction) => {
        const mainWeaponTypes = interaction.options.getString(locale('text.command.judge.question-0.name')) as WeaponType | null;
        const subWeaponTypes = interaction.options.getString(locale('text.command.judge.question-1.name')) as SubWeapon | null;
        const specialWeaponTypes = interaction.options.getString(locale('text.command.judge.question-2.name')) as SpecialWeapon | null;

        const weapon = judge(mainWeaponTypes ? [mainWeaponTypes] : [], subWeaponTypes ? [subWeaponTypes] : [], specialWeaponTypes ? [specialWeaponTypes] : []);

        if (weapon) {
            await interaction.reply({
                content: locale('text.judge'),
                embeds: [
                    {
                        title: locale('main-weapon.' + weapon.id),
                        color: getRandomElem(COLORS),
                        thumbnail: {
                            url: weapon.iconUrl,
                        },
                        fields: [
                            {
                                name: `${locale('text.sub')}:`,
                                value: locale('sub-weapon.' + weapon.sub),
                            },
                            {
                                name: `${locale('text.special')}:`,
                                value: locale('special-weapon.' + weapon.special),
                            },
                        ],
                    },
                ],
            });
        } else {
            await interaction.reply({
                content: locale('text.command.judge.fail'),
                ephemeral: true,
            });
        }
    },
};

function judge(typeFilters: WeaponType[], subFilters: SubWeapon[], specialFilters: SpecialWeapon[]): Weapon | undefined {
    const weapons = ALL_WEAPONS
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
