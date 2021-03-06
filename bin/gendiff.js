#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import genDiff from '../src/index.js';

const program = new Command();
program
    .version('0.0.1', '-V, --version', 'output the version number')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format')
    .action('Usage:', 'gendiff [options] <filepath1> <filepath2>')
    .argument('filepath1')
    .argument('filepath2')

program.parse();