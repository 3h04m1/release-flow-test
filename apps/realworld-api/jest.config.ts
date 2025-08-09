import 'tsconfig-paths/register';

import type {Config} from 'jest';
import {pathsToModuleNameMapper} from "ts-jest";

import {compilerOptions} from './tsconfig.json';

const config: Config = {
  displayName: 'realworld-api',
  rootDir: '.',
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
    '<rootDir>/src/**/*.e2e-spec.ts',
  ],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
  ],
  coverageDirectory: '<rootDir>/.coverage',
  coverageReporters: ['text', 'lcov'],
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/' }),
}

export default config;
