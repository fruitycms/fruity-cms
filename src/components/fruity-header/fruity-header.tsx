import { Component, Prop, PropDidChange } from '@stencil/core';

@Component({
  tag: 'fruity-header',
  styleUrl: 'fruity-header.scss',
  shadow: true
})
export class FruityHeader {
  @Prop() cmsName: string;

  @Prop() navigation: object;

  @PropDidChange('navigation')
  navigationChange() {
    this.render();
  }

  render() {
    const { navigation } = this;
    let linkTitleOutput;
    if (navigation) {
      console.log(navigation);
      const linkTitles = Object.keys(navigation);
      linkTitleOutput = linkTitles.map((title, index) => {
        const link = navigation[title];
        return (
          <stencil-route-link data-index={index} url={link}>
            <span class="nav-link">{title}</span>
          </stencil-route-link>
        );
      });
    }

    return (
      <header>
        <slot name="header" />
        <slot name="subheader" />
        <slot name="navigation" />
      </header>
    );
  }
}
