import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'fruity-home',
  styleUrl: 'fruity-home.scss',
  shadow: true
})
export class FruityHome {
  private posts: Array<{ title }> = [];

  componentWillLoad() {
    this.posts = JSON.parse(localStorage.getItem('fruity:posts'));
    console.log(this.posts)
    if (!this.posts) {
      return;
    }
  }

  render() {
    return <div>{this.posts.map(post => <h1>{post.title}</h1>)}</div>;
  }
}
