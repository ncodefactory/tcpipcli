import { expect } from 'chai';
import { version } from '../package.json';
import { moduleName, moduleVersion } from './tcpipcli';

describe('tcpipcli', () => {
  describe('moduleVersion', () => {
    it('is correct', () => {
      expect(moduleVersion).to.equal(version);
    });
  });
  describe('moduleName', () => {
    it('is correct', () => {
      expect(moduleName).to.equal('tcpipcli');
    });
  });
});
