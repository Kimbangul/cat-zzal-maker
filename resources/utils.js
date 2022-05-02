const EMPTY_HEART = "🤍";
const FULL_HEART = "💖";

const CAT1 = "https://cataas.com/cat/60b73094e04e18001194a309/says/react";
const CAT2 = "https://cataas.com//cat/5e9970351b7a400011744233/says/inflearn";
const CAT3 = "https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript";

const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

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
  const responseJson = await response.json(); // 응답을 json파일로 변환
  return `${OPEN_API_DOMAIN}/${responseJson.url}`; // img url을 반환
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