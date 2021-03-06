const EMPTY_HEART = "π€";
const FULL_HEART = "π";

const CAT1 = "https://cataas.com/cat/60b73094e04e18001194a309/says/react";
const CAT2 = "https://cataas.com//cat/5e9970351b7a400011744233/says/inflearn";
const CAT3 = "https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript";

const includesHangul = (text) => /[γ±-γ|γ-γ£|κ°-ν£]/i.test(text);

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json(); // μλ΅μ jsonνμΌλ‘ λ³ν
  return `${OPEN_API_DOMAIN}/${responseJson.url}`; // img urlμ λ°ν
};

const fetchCat = () => {
  const OPEN_API_DOMAIN = "https://cataas.com";
 fetch(`${OPEN_API_DOMAIN}/cat/says/hello?json=true`).then(
   (response) => {response.json(); console.log(response);}
 ).then((responseJson) => {
  console.log(responseJson);
  // return `${OPEN_API_DOMAIN}/${responseJson.url}`
 } 
 )};