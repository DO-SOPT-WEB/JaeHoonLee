import { INIT_BALANCE, HISTORY_LIST } from "./constant.js";


/**
 * 나의자산 & 수입 & 지출 헤더
 */

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



/**
 * 수입 지출 목록 
 */

const withdrawUl = document.querySelector('.withdraw__ul');

function createWithdrawItem(item) {
    const li = document.createElement('li');
    li.className = 'withdraw__li';

    const category = document.createElement('p');
    category.className = 'category__article';
    category.textContent = item.category;
    li.appendChild(category);

    const title = document.createElement('p');
    title.className = 'title__article';
    title.textContent = item.name;
    li.appendChild(title);

    const history = document.createElement('p');
    history.className = `history__article ${item.money > 0 ? 'income' : 'expend'}`;
    history.textContent = item.money > 0 ? `+ ${item.money.toLocaleString()}` : `- ${Math.abs(item.money).toLocaleString()}`;
    li.appendChild(history);

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';
    li.appendChild(deleteBtn);

    return li;
}

HISTORY_LIST.forEach(item => {
    const listItem = createWithdrawItem(item);
    withdrawUl.appendChild(listItem);
});


const income_checkbox=document.querySelector(".income-checkbox__input");

const expend_checkbox=document.querySelector(".expend-checkbox__input");


function renderWithdrawList(filteredHistory) {
    withdrawUl.innerHTML = ''; // 기존 목록 비우기
    filteredHistory.forEach(item => {
        const listItem = createWithdrawItem(item);
        withdrawUl.appendChild(listItem);
    });
}

function updateFilteredHistory() {
    const showIncome = income_checkbox.checked;
    const showExpend = expend_checkbox.checked;

    const filteredHistory = HISTORY_LIST.filter(item => {
        if (showIncome && showExpend) {
            return true; // 수입과 지출 모두 표시
        } else if (showIncome) {
            return item.type === 'income'; // 수입만 표시
        } else if (showExpend) {
            return item.type === 'expend'; // 지출만 표시
        }
        return false; // 수입과 지출 모두 숨김
    });

    renderWithdrawList(filteredHistory);
}

// // 초기 렌더링
// window.onload = function () {
//     incomeCheckbox.addEventListener('change', updateFilteredHistory);
//     expendCheckbox.addEventListener('change', updateFilteredHistory);
//     updateFilteredHistory(); // 페이지 로드 시 필터링된 목록으로 초기화
// };



console.log(income_checkbox)
income_checkbox.addEventListener('change', updateFilteredHistory);
 expend_checkbox.addEventListener('change', updateFilteredHistory);
updateFilteredHistory(); // 페이지 로드 시 필터링된 목록으로 초기화





