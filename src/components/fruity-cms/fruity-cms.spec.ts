import { render } from '@stencil/core/testing';
import { FruityCms } from './fruity-cms';

describe('my-app', () => {
  it('should build', () => {
    expect(new FruityCms()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [FruityCms],
        html: '<fruity-cms></fruity-cms>'
      });
    });
  });
});
