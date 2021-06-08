const createLogin = (): string => {
  const login: Array<string | number> = ['u', 's', 'e', 'r'];
  for(let i = 0; i <= 5; i++){
    login.push(Math.floor(Math.random() * 10))
  }

  return login.join("");
}

export default createLogin;