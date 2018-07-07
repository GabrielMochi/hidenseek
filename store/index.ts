import { ActionContext, ActionTree, MutationTree } from 'vuex'
import Category from '~/model/Category'
import Item from '~/model/Item'
import Local from '~/model/Local'
import User from '~/model/User'
import axios from '~/plugins/axios'

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
  loadUser (context: ActionContext<S, R>, distinctId: string): void
}

export const state = (): State => ({
  categorys: null,
  items: null,
  locals: null,
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
      const { data } = await axios.get<Category[]>('/api/category')
      commit('setCategorys', data)
    } catch (err) {
      console.error(err)
    }
  },
  async loadItems ({ commit }) {
    try {
      const { data } = await axios.get<Category[]>('/api/items')
      commit('setItems', data)
    } catch (err) {
      console.error(err)
    }
  },
  async loadLocals ({ commit }) {
    try {
      const { data } = await axios.get<Category[]>('/api/locals')
      commit('setLocals', data)
    } catch (err) {
      console.error(err)
    }
  },
  async loadUser ({ commit }, distinctId: string) {
    try {
      const { data } = await axios.get<Category[]>(`/api/user/${distinctId}`)
      commit('setLocals', data)
    } catch (err) {
      console.error(err)
    }
  }
}
