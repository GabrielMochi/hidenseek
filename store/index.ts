import Credential from 'domain/Login'
import { ActionContext, ActionTree, MutationTree } from 'vuex'
import Category from '~/domain/Category'
import Item from '~/domain/Item'
import Local from '~/domain/Local'
import User from '~/domain/User'
import { fetch } from '~/plugins/axios'

interface State {
  categorys: Category[],
  items: Item[],
  locals: Local[],
  user: User
}

interface Mutation<S> extends MutationTree<S> {
  setCategorys (state: S, categorys: Category[]): void,
  setItems (state: S, items: Item[]): void,
  setLocals (state: S, locals: Local[]): void,
  setUser (state: S, user: User): void
}

interface Action<S, R> extends ActionTree<S, R> {
  loadCategorys (context: ActionContext<S, R>): void,
  loadItems (context: ActionContext<S, R>): void,
  loadLocals (context: ActionContext<S, R>): void,
  login (context: ActionContext<S, R>, credential: Credential): void,
  nuxtServerInit (context: ActionContext<S, R>, params: any): void
}

export const state = (): State => ({
  categorys: [],
  items: [],
  locals: [],
  user: null
})

export const mutations: Mutation<State> = {
  setCategorys (_state, categorys: Category[]) {
    _state.categorys = categorys
  },
  setItems (_state, items: Item[]) {
    _state.items = items
  },
  setLocals (_state, locals: Local[]) {
    _state.locals = locals
  },
  setUser (_state, user: User) {
    _state.user = user
  }
}

export const actions: Action<State, State> = {
  async loadCategorys ({ commit }) {
    try {
      const { data } = await fetch.get<Category[]>('/api/category')
      commit('setCategorys', data)
    } catch (err) {
      console.error(err)
    }
  },
  async loadItems ({ commit }) {
    try {
      const { data } = await fetch.get<Category[]>('/api/items')
      commit('setItems', data)
    } catch (err) {
      console.error(err)
    }
  },
  async loadLocals ({ commit }) {
    try {
      const { data } = await fetch.get<Category[]>('/api/locals')
      commit('setLocals', data)
    } catch (err) {
      console.error(err)
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
