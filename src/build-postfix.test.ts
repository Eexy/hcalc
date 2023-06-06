import { describe, expect, it } from 'vitest';
import { buildPostfix } from './build-postfix';

describe('buildPostfix', () => {
  it('should return postfix expression', () => {
    expect(buildPostfix('3*5-2/3')).toStrictEqual('35*23/-'.split(''));
    expect(buildPostfix('3+5')).toStrictEqual('35+'.split(''));
    expect(buildPostfix('3*5-2/3+1')).toStrictEqual('35*23/-1+'.split(''));
  });
});
