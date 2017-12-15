import { Component } from '@stencil/core';

@Component({
  tag: 'fruity-cms',
  styleUrl: 'fruity-cms.scss',
  shadow: true
})
export class FruityCms {
  render() {
    return (
      <div>
        <fruity-header>
          <h1 slot="header">FruityCMS</h1>
          <h2 slot="subheader">A web component CMS</h2>
          <nav slot="navigation">
            <ul>
              <li>
                <stencil-route-link url="/">
                  <span class="nav-link">Home</span>
                </stencil-route-link>
              </li>
            </ul>
          </nav>
        </fruity-header>

        <slot name="content" />
      </div>
    );
  }
}
