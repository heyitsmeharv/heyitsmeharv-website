export const introductionText = (language) => {
  let text;
  switch (language) {
    case 'EN':
      text = "Hello 👋, my name is Adam. I'm a software engineer from Oxford, England."
      break;
    case 'ES':
      text = "Hola 👋, mi nombre es Adam. Soy un ingeniero de software de Oxford, Inglaterra."
      break;
  }
  return text;
}