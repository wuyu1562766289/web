export default function ({ route, redirect, store }) {
  // 如果没有token，则重定向到login
  if(!store.state.user.token) {
    redirect('/login?redirect=' + route.path);
  }
}