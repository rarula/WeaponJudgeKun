import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

export type Command = {
    command: SlashCommandBuilder | Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>;
    execute: (interaction: ChatInputCommandInteraction) => void;
};
