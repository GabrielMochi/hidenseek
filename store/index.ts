import Credential from 'domain/Login'
import { ActionContext, ActionTree, MutationTree } from 'vuex'
import Category from '~/domain/Category'
import Local from '~/domain/Local'
import User from '~/domain/User'
import { fetch } from '~/plugins/axios'

interface State {
  categories: Category[],
  locals: Local[],
  employees: User[],
  users: User[],
  user: User
}

interface Mutation<S> extends MutationTree<S> {
  setCategories (state: S, categories: Category[]): void,
  setLocals (state: S, locals: Local[]): void,
  setUser (state: S, user: User): void,
  setEmployees (state: S, employees: User[]): void,
  setUsers (state: S, users: User[]): void
}

interface Action<S, R> extends ActionTree<S, R> {
  loadCategory (context: ActionContext<S, R>, id: string): Promise<Category>
  loadCategories (context: ActionContext<S, R>): Promise<Category[]>
  insertCategory (context: ActionContext<S, R>, category: Category): Promise<Category>
  insertCategories (context: ActionContext<S, R>, categories: Category[]): Promise<Category[]>
  updateCategory (context: ActionContext<S, R>, category: Category): Promise<Category>
  deleteCategory (context: ActionContext<S, R>, id: string): Promise<void>
  loadLocals(context: ActionContext<S, R>): Promise<Local[]>
  insertLocal (context: ActionContext<S, R>, local: Local) : Promise<Local>
  updateLocal (context: ActionContext<S, R>, local: Local): Promise<Local>
  deleteLocal(context:ActionContext<S, R>, id:string) : Promise<void>
  loadEmployees(context: ActionContext<S, R>): Promise<User[]>
  insertUser(context: ActionContext<S, R>, user: User): Promise<User>
  updateUser(context: ActionContext<S, R>, user: User): Promise<User>
  deleteUser(context: ActionContext<S, R>, id: string): Promise<void>
  loadUsers(context: ActionContext<S, R>): Promise<User[]>
  login (context: ActionContext<S, R>, credential: Credential): void,
  nuxtServerInit (context: ActionContext<S, R>, params: any): void
}

export const state = (): State => ({
  categories: [],
  locals: [],
  employees: [],
  users: [],
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
  },
  setEmployees(_state, employees: User[]){
    _state.employees = employees
  },
  setUsers(_state, users: User[]){
    _state.users = users
  }
}

export const actions: Action<State, State> = {
  async loadCategory ({}, id: string) {
    const { data } = await fetch.get<Category>(`/api/category/${id}`)
    return data
  },
  async loadCategories ({ commit }) {
    const { data } = await fetch.get<Category[]>('/api/category')
    await commit('setCategories', data)
    return data
  },
  async insertCategory ({ dispatch }, category) {
    const { data } = await fetch.post<Category>('/api/category', category)
    await dispatch('loadCategories')
    return data
  },
  async insertCategories ({ dispatch }, categories: Category[]) {
    const { data } = await fetch.post<Category[]>('/api/category/saveAll', categories)
    await dispatch('loadCategories')
    return data
  },
  async updateCategory ({ dispatch }, category: Category) {
    const { data } = await fetch.put<Category>(`/api/category/${category.id}`, category)
    await dispatch('loadCategories')
    return data
  },
  async deleteCategory ({ dispatch }, id: string) {
    await fetch.delete(`/api/category/${id}`)
    await dispatch('loadCategories')
  },
  async loadLocals({commit}){
    const { data } = await fetch.get<Local[]>('/api/local')
    await commit('setLocals', data)
    return data
  },
  async insertLocal({dispatch}, local: Local){
    const {data} = await fetch.post<Local>('/api/local', local)
    await dispatch('loadLocals')
    return data
  },
  async updateLocal({dispatch}, local: Local){
    const { data } = await fetch.put<Local>(`/api/local/${local.id}`, local)
    await dispatch('loadLocals')
    return data
  },
  async deleteLocal({dispatch}, id:string){
    await fetch.delete(`/api/local/${id}`)
    await dispatch('loadLocals')
  },
  async loadEmployees({commit}){
    const { data } = await fetch.get<User[]>('/api/user/employees')
    await commit('setEmployees', data)
    return data
  },
  async insertUser({dispatch}, user: User){
    const { data } = await fetch.post<User>('/api/user/', user)
    await dispatch('loadEmployees')
    await dispatch('loadUsers')
    return data
  },
  async updateUser({dispatch}, user: User){
    const { data } = await fetch.put<User>(`/api/user/${user.id}`, user)
    await dispatch('loadEmployees')
    await dispatch('loadUsers')
    return data
  },
  async deleteUser({dispatch}, id: string){
    await fetch.delete(`/api/user/${id}`)
    await dispatch('loadEmployees')
    await dispatch('loadUsers')
  },
  async loadUsers({commit}){
    const { data } = await fetch.get<User[]>('/api/user')
    await commit('setUsers', data)
    return data
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
