import { INIT_BALANCE, HISTORY_LIST } from "./constant.js";

let filteredHistory=HISTORY_LIST;
/**
 * 나의자산 & 수입 & 지출 헤더
 */

const totalMoney = filteredHistory.reduce((total, item) => {
    if (item.type === "income") {
        total += item.money;
    } else {
        total -= Math.abs(item.money);
    }
    return total;
}, 0);
const depositSection = document.querySelector('.deposit__section');
const totalMoneyElement = depositSection.querySelector('p');

const income=depositSection.querySelector(".income__article");
const expend=depositSection.querySelector(".expend__article");

const filterIncome=filteredHistory.filter(item=>item.type==="income");
const totalIncome = filterIncome.reduce((total, item) => total + item.money, 0);

const filterExpend=filteredHistory.filter(item=>item.type==="expend");
const totalExpend = filterExpend.reduce((total, item) => total + item.money, 0);


totalMoneyElement.textContent = totalMoney.toLocaleString(); // 숫자 포맷팅 (콤마 추가)
income.textContent =`+ ${totalIncome.toLocaleString()}`; 
expend.textContent=`- ${totalExpend.toLocaleString()}`



/**
 * 수입 지출 목록 렌더링
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

    const money = document.createElement('p');
    money.className = `history__article ${item.type==="income"? 'income' : 'expend'}`;
    money.textContent = item.type==="income" ? `+ ${item.money.toLocaleString()}` : `- ${Math.abs(item.money).toLocaleString()}`;
    li.appendChild(money);

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';
    li.appendChild(deleteBtn);

    return li;
}

filteredHistory.forEach(item => {
    const listItem = createWithdrawItem(item);
    withdrawUl.appendChild(listItem);
});


/**
 * 수입 지출 목록 필터링
 */
const income_checkbox=document.querySelector(".income-checkbox__input");
const expend_checkbox=document.querySelector(".expend-checkbox__input");


function renderWithdrawList(filteredHistory) {
    withdrawUl.innerHTML = '';
    filteredHistory.forEach(item => {
        const listItem = createWithdrawItem(item);
        withdrawUl.appendChild(listItem);
    });
}

function updateFilteredHistory() {
    const showIncome = income_checkbox.checked;
    const showExpend = expend_checkbox.checked;

     filteredHistory = HISTORY_LIST.filter(item => {
        if (showIncome && showExpend) {
            return true; 
        } else if (showIncome) {
            return item.type === 'income'; 
        } else if (showExpend) {
            return item.type === 'expend';
        }
        return false; 
    });

    renderWithdrawList(filteredHistory);
}


income_checkbox.addEventListener('change', updateFilteredHistory);
 expend_checkbox.addEventListener('change', updateFilteredHistory);
updateFilteredHistory(); 


/**
 * 삭제 버튼 기능 구현
 */

const deleteBtn=document.querySelectorAll(".delete-btn");

function deleteItem(listItem) {
    withdrawUl.removeChild(listItem);
    const itemName = listItem.querySelector('.title__article').textContent;
    const itemType = listItem.querySelector('.history__article').textContent.substr(2);
    console.log(itemName, itemType)
    // filteredHistory= HISTORY_LIST.filter(item => !(item.name === itemName && item.type === itemType));
    // updateFilteredHistory(); 
 
}

deleteBtn.forEach((button) => {
    button.addEventListener('click', function() {
        const listItem = this.parentElement;
        console.log(listItem);
          deleteItem(listItem);
    });
});
// deleteBtn.addEventListener("click",function(){
//     const listItem = this.parentElement;
//     console.log(listItem)
//     // 해당 항목을 HISTORY_LIST에서 제거
//     const itemName = listItem.querySelector('.title__article').textContent;
//     const itemType = listItem.querySelector('.history__article').classList.contains('income') ? 'income' : 'expend';
//     HISTORY_LIST.filter(item => !(item.name === itemName && item.type === itemType));

//     // 필터링된 목록 다시 렌더링
//     renderWithdrawList(HISTORY_LIST);
// }
// )






