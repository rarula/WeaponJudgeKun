import { Client, REST, Routes } from 'discord.js';

import { VERSION } from '.';
import { JudgeCommand } from './commands';
import { locale } from './locales';
import { Command } from './types/Command';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const BOT_TOKEN = process.env.BOT_TOKEN!;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const APP_ID = process.env.APP_ID!;

const CLIENT = new Client({
    intents: [],
});

const COMMANDS: Command[] = [
    JudgeCommand,
];

export async function setupBot(): Promise<void> {
    await registerCommands();

    CLIENT.on('ready', () => {
        CLIENT.user?.setActivity({
            name: `${locale('text-judge')} | ${VERSION} `,
        });
    });

    CLIENT.on('interactionCreate', async (interaction) => {
        if (!interaction.isChatInputCommand()) return;

        for (const command of COMMANDS) {
            if (interaction.commandName === command.command.name) {
                command.execute(interaction);
            }
        }
    });

    CLIENT.login(BOT_TOKEN);
}

async function registerCommands(): Promise<void> {
    const commands = COMMANDS.map((command) => {
        return command.command;
    });

    const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);
    await rest.put(Routes.applicationCommands(APP_ID), {
        body: commands,
    });
}
