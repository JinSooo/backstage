import React, { useReducer } from 'react'

// 初始化状态
const initialState = {}
// 全局Context
export const StoreContext = React.createContext(initialState)

// reducer
const StoreReducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

// 暴露的全局组件
export const Store: React.FC = ({ children }) => {
  // 创建Reducer
  const [state, dispatch] = useReducer(StoreReducer, initialState)

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

export default Store
