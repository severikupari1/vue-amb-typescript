import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { notify } from '@/utils/utils';
import api from '@/api';
import { Post } from '@/interfaces/Posts';

const POST_FETCH_COUNT = 6;

@Module({ namespaced: true })
class Posts extends VuexModule {
  public list: Array<Post> = [];
  public fetchedList = false;
  public post: Post = {
    id: 1,
    title: '',
    body: ''
  };

  @Mutation
  public saveList(data: Array<Post>): void {
    this.fetchedList = true;
    this.list = [...this.list, ...data.slice(0, POST_FETCH_COUNT)];
  }

  @Mutation
  public showError(message: string): void {
    notify({
      title: 'Error',
      type: 'error',
      message: message
    });
  }

  @Action
  public async getAllPosts(): Promise<boolean> {
    if (this.fetchedList) {
      return Promise.resolve(true);
    } else {
      try {
        const response = await api.get('/posts');
        this.context.commit('saveList', response.data);
        return true;
      } catch (e) {
        this.context.commit('showError', 'Could not fetch the list');
        return false;
      }
    }
  }

  @Mutation
  public save(data: Post): void {
    this.post = data;
  }

  @Action
  public async getPost(id: number): Promise<Post | boolean> {
    if (this.list.length !== 0) {
      const fetched = this.list.filter(item => {
        return item.id === id;
      });

      if (fetched.length) {
        return Promise.resolve(fetched[0]);
      } else {
        return Promise.reject(false);
      }
    } else {
      return api
        .get(`/posts/${id}`)
        .then(response => {
          this.context.commit('save', response.data);
          return response.data;
        })
        .catch(() => {
          notify({
            title: 'Error',
            type: 'error',
            message: 'Could not fetch Article'
          });
          return false;
        });
    }
  }

  @Mutation
  public edit(data: Post): void {
    this.list.map(item => {
      if (item.id === data.id) {
        item = data;
      }
    });
  }

  @Action
  public async editPost(data: Post): Promise<boolean> {
    return api
      .put(`/posts/${data.id}`, {
        data
      })
      .then(() => {
        notify({
          title: 'Success',
          type: 'success',
          message: 'Successfully edited'
        });
        this.context.commit('edit', data);
        return true;
      })
      .catch(() => {
        notify({
          title: 'Error',
          type: 'error',
          message: 'Could not edit'
        });
        return false;
      });
  }

  @Mutation
  public create(newPost: Post): void {
    if (this.list.length >= 1) {
      const maxPost = this.list.reduce(function(prev, current) {
        return prev.id > current.id ? prev : current;
      });

      // Change new post id to highest id plus one.
      newPost.id = maxPost.id + 1;
    }

    this.list.unshift(newPost);
  }

  @Action
  public createPost(data: Post): Promise<boolean> {
    return api
      .post('/posts', {
        data
      })
      .then(response => {
        notify({
          title: 'Success',
          type: 'success',
          message: 'Successfully created an Article'
        });
        response.data.data.id = response.data.id;
        this.context.commit('create', response.data.data);
        return true;
      })
      .catch(e => {
        notify({
          title: 'Error',
          type: 'error',
          message: 'Could not create'
        });
        return false;
      });
  }

  @Mutation
  public delete(id: number): void {
    this.list = this.list.filter(item => {
      return item.id !== id;
    });
  }

  @Action
  public async deletePost(id: number): Promise<void> {
    return api
      .delete(`/posts/${id}`)
      .then(() => {
        notify({
          title: 'Success',
          type: 'success',
          message: 'Successfully deleted'
        });
        this.context.commit('delete', id);
      })
      .catch(() => {
        notify({
          title: 'Error',
          type: 'error',
          message: 'Could not delete'
        });
      });
  }
}

export default Posts;
