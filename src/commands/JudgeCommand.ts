import { SlashCommandBuilder } from 'discord.js';

import { locale } from '../locales';
import { Command } from '../types/Command';
import { Language } from '../types/Language';
import { SpecialWeapon, SubWeapon, Weapon, WeaponType } from '../types/Weapon';
import { getRandomElem } from '../utils/array';
import { BLASTERS, BRELLAS, BRUSHES, CHARGERS, DUALIES, ROLLERS, SHOOTERS, SLOSHERS, SPLATANAS, SPLATLINGS, STRINGERS } from '../weapons';

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

export const JudgeCommand: Command = {
    command: new SlashCommandBuilder()
        .setName(
            'judge',
        )
        .setDescription(
            locale('text-command-judge-des-0'),
        )
        .addStringOption((option) =>
            option
                .setName(
                    locale('text-command-judge-name-1'),
                )
                .setDescription(
                    locale('text-command-judge-des-1'),
                )
                .addChoices(
                    { name: locale('text-shooter'), value: 'SHOOTER' },
                    { name: locale('text-splatling'), value: 'SPLATLING' },
                    { name: locale('text-charger'), value: 'CHARGER' },
                    { name: locale('text-roller'), value: 'ROLLER' },
                    { name: locale('text-blaster'), value: 'BLASTER' },
                    { name: locale('text-slosher'), value: 'SLOSHER' },
                    { name: locale('text-dualie'), value: 'DUALIE' },
                    { name: locale('text-brush'), value: 'BRUSH' },
                    { name: locale('text-stringer'), value: 'STRINGER' },
                    { name: locale('text-brella'), value: 'BRELLA' },
                    { name: locale('text-splatana'), value: 'SPLATANA' },
                )
        )
        .addStringOption((option) =>
            option
                .setName(
                    locale('text-command-judge-name-2'),
                )
                .setDescription(
                    locale('text-command-judge-des-2'),
                )
                .addChoices(
                    { name: locale('splat-bomb'), value: 'splat-bomb' },
                    { name: locale('suction-bomb'), value: 'suction-bomb' },
                    { name: locale('burst-bomb'), value: 'burst-bomb' },
                    { name: locale('curling-bomb'), value: 'curling-bomb' },
                    { name: locale('autobomb'), value: 'autobomb' },
                    { name: locale('ink-mine'), value: 'ink-mine' },
                    { name: locale('toxic-mist'), value: 'toxic-mist' },
                    { name: locale('point-sensor'), value: 'point-sensor' },
                    { name: locale('splash-wall'), value: 'splash-wall' },
                    { name: locale('sprinkler'), value: 'sprinkler' },
                    { name: locale('squid-beakon'), value: 'squid-beakon' },
                    { name: locale('fizzy-bomb'), value: 'fizzy-bomb' },
                    { name: locale('torpedo'), value: 'torpedo' },
                    { name: locale('angle-shooter'), value: 'angle-shooter' },
                )
        )
        .addStringOption((option) =>
            option
                .setName(
                    locale('text-command-judge-name-3'),
                )
                .setDescription(
                    locale('text-command-judge-des-3'),
                )
                .addChoices(
                    { name: locale('big-bubbler'), value: 'big-bubbler' },
                    { name: locale('booyah-bomb'), value: 'booyah-bomb' },
                    { name: locale('crab-tank'), value: 'crab-tank' },
                    { name: locale('ink-storm'), value: 'ink-storm' },
                    { name: locale('ink-vac'), value: 'ink-vac' },
                    { name: locale('inkjet'), value: 'inkjet' },
                    { name: locale('killer-wail-5.1'), value: 'killer-wail-5.1' },
                    { name: locale('kraken-royale'), value: 'kraken-royale' },
                    { name: locale('reefslider'), value: 'reefslider' },
                    { name: locale('super-chump'), value: 'super-chump' },
                    { name: locale('tacticooler'), value: 'tacticooler' },
                    { name: locale('tenta-missiles'), value: 'tenta-missiles' },
                    { name: locale('triple-inkstrike'), value: 'triple-inkstrike' },
                    { name: locale('trizooka'), value: 'trizooka' },
                    { name: locale('ultra-stamp'), value: 'ultra-stamp' },
                    { name: locale('wave-breaker'), value: 'wave-breaker' },
                    { name: locale('zipcaster'), value: 'zipcaster' },
                )
        )
        .addStringOption((option) =>
            option
                .setName(
                    locale('text-command-judge-name-4', 'en'),
                )
                .setDescription(
                    locale('text-command-judge-des-4', 'en'),
                )
                .addChoices(
                    { name: '日本語', value: 'ja' },
                    { name: 'English', value: 'en' },
                )
        ),

    execute: async (interaction) => {
        const main = interaction.options.get(locale('text-command-judge-name-1'))?.value as WeaponType | undefined;
        const sub = interaction.options.get(locale('text-command-judge-name-2'))?.value as SubWeapon | undefined;
        const special = interaction.options.get(locale('text-command-judge-name-3'))?.value as SpecialWeapon | undefined;
        const language = (interaction.options.get(locale('text-command-judge-name-4', 'en'))?.value ?? 'ja') as Language;

        const weapon = judge(
            main ? [main] : [],
            sub ? [sub] : [],
            special ? [special] : [],
        );

        if (weapon) {
            await interaction.reply({
                content: locale('text-judge', language),
                embeds: [
                    {
                        title: locale(weapon.id, language),
                        color: getRandomElem(COLORS),
                        fields: [
                            {
                                name: `${locale('text-sub', language)}:`,
                                value: locale(weapon.sub, language),
                            },
                            {
                                name: `${locale('text-special', language)}:`,
                                value: locale(weapon.special, language),
                            },
                        ],
                    },
                ],
            });
        } else {
            await interaction.reply({
                content: locale('text-command-judge-fail', language),
                ephemeral: true,
            });
        }
    },
};

function judge(typeFilters: WeaponType[], subFilters: SubWeapon[], specialFilters: SpecialWeapon[]): Weapon | undefined {
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
