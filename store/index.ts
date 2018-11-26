import Credential from 'domain/Login'
import { ActionContext, ActionTree, MutationTree } from 'vuex'
import Category from '~/domain/Category'
import Local from '~/domain/Local'
import User from '~/domain/User'
import { fetch } from '~/plugins/axios'

interface State {
  categories: Category[],
  locals: Local[],
  user: User
}

interface Mutation<S> extends MutationTree<S> {
  setCategories (state: S, categories: Category[]): void,
  setLocals (state: S, locals: Local[]): void,
  setUser (state: S, user: User): void
}

interface Action<S, R> extends ActionTree<S, R> {
  loadCategory (context: ActionContext<S, R>): (id: string) => Promise<Category>
  loadCategories (context: ActionContext<S, R>): Promise<Category[]>,
  insertCategory (context: ActionContext<S, R>): (category: Category) => Promise<Category>
  insertCategories (context: ActionContext<S, R>): (categories: Category[]) => Promise<Category[]>
  updateCategory (context: ActionContext<S, R>): (category: Category, id: string) => Promise<Category>
  deleteCategory (context: ActionContext<S, R>): (id: string) => Promise<void>
  login (context: ActionContext<S, R>, credential: Credential): void,
  nuxtServerInit (context: ActionContext<S, R>, params: any): void
}

export const state = (): State => ({
  categories: [],
  locals: [],
  user: null
})

export const mutations: Mutation<State> = {
  setCategories (_state, categories: Category[]) {
    _state.categories = categories
  },
  setLocals (_state, locals: Local[]) {
    _state.locals = locals
  },
  setUser (_state, user: User) {
    _state.user = user
  }
}

export const actions: Action<State, State> = {
  loadCategory () {
    return async (id: string) => {
      const { data } = await fetch.get<Category>(`/api/category/${id}`)
      return data
    }
  },
  async loadCategories ({ commit }) {
    const { data } = await fetch.get<Category[]>('/api/category')
    await commit('setCategories', data)
    return data
  },
  insertCategory ({ dispatch }) {
    return async (category: Category) => {
      const { data } = await fetch.post<Category>('/api/category', category)
      await dispatch('loadCategories')
      return data
    }
  },
  insertCategories ({ dispatch }) {
    return async (categories: Category[]) => {
      const { data } = await fetch.post<Category[]>('/api/category/saveAll', categories)
      await dispatch('loadCategories')
      return data
    }
  },
  updateCategory ({ dispatch }) {
    return async (category: Category, id: string) => {
      const { data } = await fetch.put<Category>(`/api/category/${id}`, category)
      await dispatch('loadCategories')
      return data
    }
  },
  deleteCategory ({ dispatch }) {
    return async (id: string) => {
      await fetch.delete(`/api/category/${id}`)
      await dispatch('loadCategories')
    }
  },
  async login ({ commit }, credential) {
    try {
      const { data } = await fetch.post<User>('/api/login', credential)
      commit('setUser', data)
    } catch (err) {
      console.error(err)
      throw new Error('Bad credentials')
    }
  },
  nuxtServerInit ({ commit }, { req }) {
    if (req.session) {
      if (req.session.user) {
        commit('setUser', req.session.user)
      }
    }
  }
}
