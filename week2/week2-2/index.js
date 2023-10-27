import { INIT_BALANCE, HISTORY_LIST } from "./constant.js";
const myDeposit=document.querySelector(".deposit__article");

const totalMoney=HISTORY_LIST.reduce((total, item) => total + item.money, 0);

const depositSection = document.querySelector('.deposit__section');
const totalMoneyElement = depositSection.querySelector('p');

const income=depositSection.querySelector(".income__article");
const expend=depositSection.querySelector(".expend__article");

const filterIncome=HISTORY_LIST.filter(item=>item.money>0);
const totalIncome = filterIncome.reduce((total, item) => total + item.money, 0);

const filterExpend=HISTORY_LIST.filter(item=>item.money<=0);
const totalExpend = filterExpend.reduce((total, item) => total + item.money, 0);


totalMoneyElement.textContent = totalMoney.toLocaleString(); // 숫자 포맷팅 (콤마 추가)
income.textContent =`+${totalIncome.toLocaleString()}`; 
expend.textContent=`${totalExpend.toLocaleString()}`