import { SlashCommandBuilder } from 'discord.js';

import { locale } from '../locales';
import { roulette } from '../roulette';
import { Command } from '../types/Command';
import { WeaponType } from '../types/Weapon';

export const JudgeCommand: Command = {
    command: new SlashCommandBuilder()
        .setName('roulette')
        .setDescription('ランダムにウェポンを選択します')
        .addStringOption((option) =>
            option
                .setName('種類')
                .setDescription('選択した種類で絞り込みます')
                .addChoices(
                    { name: 'シューター', value: 'SHOOTER' },
                    { name: 'スピナー', value: 'SPLATLING' },
                    { name: 'チャージャー', value: 'CHARGER' },
                    { name: 'ローラー', value: 'ROLLER' },
                    { name: 'ブラスター', value: 'BLASTER' },
                    { name: 'スロッシャー', value: 'SLOSHER' },
                    { name: 'マニューバー', value: 'DUALIE' },
                    { name: 'フデ', value: 'BRUSH' },
                    { name: 'ストリンガー', value: 'STRINGER' },
                    { name: 'シェルター', value: 'BRELLA' },
                    { name: 'ワイパー', value: 'SPLATANA' },
                )
        ),

    execute: async (interaction) => {
        const type = interaction.options.get('type')?.value as WeaponType | undefined;

        const weapon = roulette(
            type ? [type] : [],
            [],
            [],
        );

        await interaction.reply({
            embeds: [
                {
                    title: locale(weapon.id),
                    fields: [
                        {
                            name: 'Sub:',
                            value: locale(weapon.sub, 'ja'),
                        },
                        {
                            name: 'Special:',
                            value: locale(weapon.special, 'ja'),
                        },
                    ],
                },
            ],
        });
    },
};
