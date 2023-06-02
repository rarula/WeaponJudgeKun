import { SlashCommandBuilder } from 'discord.js';

import { judge } from '../judge';
import { locale } from '../locales';
import { Command } from '../types/Command';
import { SpecialWeapon, SubWeapon, WeaponType } from '../types/Weapon';

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
                    {
                        name: locale('text-shooter'),
                        value: 'SHOOTER',
                    },
                    {
                        name: locale('text-splatling'),
                        value: 'SPLATLING',
                    },
                    {
                        name: locale('text-charger'),
                        value: 'CHARGER',
                    },
                    {
                        name: locale('text-roller'),
                        value: 'ROLLER',
                    },
                    {
                        name: locale('text-blaster'),
                        value: 'BLASTER',
                    },
                    {
                        name: locale('text-slosher'),
                        value: 'SLOSHER',
                    },
                    {
                        name: locale('text-dualie'),
                        value: 'DUALIE',
                    },
                    {
                        name: locale('text-brush'),
                        value: 'BRUSH',
                    },
                    {
                        name: locale('text-stringer'),
                        value: 'STRINGER',
                    },
                    {
                        name: locale('text-brella'),
                        value: 'BRELLA',
                    },
                    {
                        name: locale('text-splatana'),
                        value: 'SPLATANA',
                    },
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
                    {
                        name: locale('splat-bomb'),
                        value: 'splat-bomb',
                    },
                    {
                        name: locale('suction-bomb'),
                        value: 'suction-bomb',
                    },
                    {
                        name: locale('burst-bomb'),
                        value: 'burst-bomb',
                    },
                    {
                        name: locale('curling-bomb'),
                        value: 'curling-bomb',
                    },
                    {
                        name: locale('autobomb'),
                        value: 'autobomb',
                    },
                    {
                        name: locale('ink-mine'),
                        value: 'ink-mine',
                    },
                    {
                        name: locale('toxic-mist'),
                        value: 'toxic-mist',
                    },
                    {
                        name: locale('point-sensor'),
                        value: 'point-sensor',
                    },
                    {
                        name: locale('splash-wall'),
                        value: 'splash-wall',
                    },
                    {
                        name: locale('sprinkler'),
                        value: 'sprinkler',
                    },
                    {
                        name: locale('squid-beakon'),
                        value: 'squid-beakon',
                    },
                    {
                        name: locale('fizzy-bomb'),
                        value: 'fizzy-bomb',
                    },
                    {
                        name: locale('torpedo'),
                        value: 'torpedo',
                    },
                    {
                        name: locale('angle-shooter'),
                        value: 'angle-shooter',
                    },
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
                    {
                        name: locale('big-bubbler'),
                        value: 'big-bubbler',
                    },
                    {
                        name: locale('booyah-bomb'),
                        value: 'booyah-bomb',
                    },
                    {
                        name: locale('crab-tank'),
                        value: 'crab-tank',
                    },
                    {
                        name: locale('ink-storm'),
                        value: 'ink-storm',
                    },
                    {
                        name: locale('ink-vac'),
                        value: 'ink-vac',
                    },
                    {
                        name: locale('inkjet'),
                        value: 'inkjet',
                    },
                    {
                        name: locale('killer-wail-5.1'),
                        value: 'killer-wail-5.1',
                    },
                    {
                        name: locale('kraken-royale'),
                        value: 'kraken-royale',
                    },
                    {
                        name: locale('reefslider'),
                        value: 'reefslider',
                    },
                    {
                        name: locale('super-chump'),
                        value: 'super-chump',
                    },
                    {
                        name: locale('tacticooler'),
                        value: 'tacticooler',
                    },
                    {
                        name: locale('tenta-missiles'),
                        value: 'tenta-missiles',
                    },
                    {
                        name: locale('triple-inkstrike'),
                        value: 'triple-inkstrike',
                    },
                    {
                        name: locale('trizooka'),
                        value: 'trizooka',
                    },
                    {
                        name: locale('ultra-stamp'),
                        value: 'ultra-stamp',
                    },
                    {
                        name: locale('wave-breaker'),
                        value: 'wave-breaker',
                    },
                    {
                        name: locale('zipcaster'),
                        value: 'zipcaster',
                    },
                )
        ),

    execute: async (interaction) => {
        const type = interaction.options.get(locale('text-command-judge-name-1'))?.value as WeaponType | undefined;
        const sub = interaction.options.get(locale('text-command-judge-name-2'))?.value as SubWeapon | undefined;
        const special = interaction.options.get(locale('text-command-judge-name-3'))?.value as SpecialWeapon | undefined;

        const weapon = judge(
            type
                ? [type]
                : [],
            sub
                ? [sub]
                : [],
            special
                ? [special]
                : [],
        );

        await interaction.reply({
            embeds: [
                {
                    title: locale(weapon.id),
                    fields: [
                        {
                            name: `${locale('text-sub')}:`,
                            value: locale(weapon.sub),
                        },
                        {
                            name: `${locale('text-special')}:`,
                            value: locale(weapon.special),
                        },
                    ],
                },
            ],
        });
    },
};
