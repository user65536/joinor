export const route = {
  to (page, redirect=false) {
    const fn = redirect ? 'redirectTo' : 'navigateTo'
    mpvue[fn]({
      url: `../${page}/main`
    })
  },
  queryTo (page, query, redirect=false) {
    const fn = redirect ? 'redirectTo' : 'navigateTo';
    let q = '';
    for([k, v] of Object.entries(query)) {
      q += `${k}=${v}&`
    }
    
    q = q.slice(0, -1)
    
    mpvue[fn]({
      url: `../${page}/main?${q}`
    })
  }
}