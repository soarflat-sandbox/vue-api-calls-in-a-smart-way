import { AxiosResponse } from "axios";
import PostsRepository from "./postsRepository";

export interface Repository {
  [k: string]: (param?: any) => Promise<AxiosResponse<any>>;
}

interface Repositories {
  posts: Repository;
}

const repositories: Repositories = {
  posts: PostsRepository
};

const RepositoryFactory = {
  create: (name: keyof Repositories) => repositories[name]
};

export default RepositoryFactory;
