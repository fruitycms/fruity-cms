import { render } from '@stencil/core/testing';
import { FruityHeader } from './fruity-header';

describe('app', () => {
  it('should build', () => {
    expect(new FruityHeader()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [FruityHeader],
        html: '<fruity-header></fruity-header>'
      });
    });
  });
});
