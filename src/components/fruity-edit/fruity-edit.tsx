import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'fruity-edit',
  styleUrl: 'fruity-edit.scss',
  shadow: true
})
export class FruityEdit {
  // TODO: When making this a prop, it is always empty when trying to load from local storage
  posts: Array<{
    id: string;
    title: string;
    body: string;
    createdAt: Date;
    modifiedAt: Date;
  }> = [];

  @Prop() match: any;

  componentWillLoad() {
    try {
      const items = localStorage.getItem('fruity:posts');
      this.posts = JSON.parse(items);
      if (!this.posts) {
        return;
      }
    } catch (e) {
      throw e;
    }
  }

  render() {
    const { posts } = this;
    return (
      <stencil-router id="main">
        <stencil-route url="/edit">
          <div>
            <table id="edit-posts">
              <thead>
                <tr>
                  <th>Post #</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(post => (
                  <tr>
                    <td>{post.id}</td>
                    <td>
                      <stencil-route-link url={`/edit/${post.id}`}>{post.title}</stencil-route-link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </stencil-route>
        <stencil-route url="/edit/:pageId">
          {console.log('match', this.match)}
          {this.match.params.pageId ? (
            <div>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" value={posts[this.match.params.id].title} />

              <slot name="content" />
            </div>
          ) : (
            <div />
          )}
        </stencil-route>
      </stencil-router>
    );
  }
}
