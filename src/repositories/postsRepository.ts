import Repository from "./Repository";
import { Repository as IRepository } from "./RepositoryFactory";

const resource = "posts";
const postsRepositry: IRepository = {
  get() {
    return Repository.get(`${resource}`);
  },

  getPostById(postId: string) {
    return Repository.get(`${resource}/${postId}`);
  },

  createPost(payload: string) {
    return Repository.post(`${resource}`, payload);
  }
};

export default postsRepositry;
