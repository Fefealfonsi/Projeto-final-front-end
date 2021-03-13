  
export const goToFeed = (history) => {
    history.push('/')
}

export const goToLogin = (history) => {
    history.push('/login')
}
  
export const goToSignup = (history) => {
    history.push('/signup')
}

export const goToCreate = (history) => {
    history.push(`/create`)
}
  
export const goToDetail = (history, id) => {
    history.push(`/detail/${id}`)
}
  
