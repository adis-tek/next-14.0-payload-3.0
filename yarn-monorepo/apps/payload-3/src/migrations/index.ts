import * as migration_20241125_035156_initial from './20241125_035156_initial';

export const migrations = [
  {
    up: migration_20241125_035156_initial.up,
    down: migration_20241125_035156_initial.down,
    name: '20241125_035156_initial'
  },
];
