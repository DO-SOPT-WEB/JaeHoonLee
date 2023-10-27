import { INIT_BALANCE, HISTORY_LIST } from "./constant.js";

let filteredHistory=HISTORY_LIST;



/**
 * 수입 지출 목록 구현
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


/**
 * 렌더링 함수
 */

function renderWithdrawList(filteredHistory) {

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
     * 내역리스트 렌더링
     */
    withdrawUl.innerHTML = '';
    filteredHistory.forEach(item => {
        const listItem = createWithdrawItem(item);
        withdrawUl.appendChild(listItem);
    });
}


/**
 * 수입 지출 목록 필터링
 */
const income_checkbox=document.querySelector(".income-checkbox__input");
const expend_checkbox=document.querySelector(".expend-checkbox__input");


function updateFilteredHistory() {
    const showIncome = income_checkbox.checked;
    const showExpend = expend_checkbox.checked;

     const filterCheckHistory = filteredHistory.filter(item => {
        if (showIncome && showExpend) {
            return true; 
        } else if (showIncome) {
            return item.type === 'income'; 
        } else if (showExpend) {
            return item.type === 'expend';
        }
        return false; 
    });

    renderWithdrawList(filterCheckHistory);
}


income_checkbox.addEventListener('change', updateFilteredHistory);
 expend_checkbox.addEventListener('change', updateFilteredHistory);
 updateFilteredHistory(); 


/**
 * 삭제 버튼 기능 구현
 */



withdrawUl.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('delete-btn')) {
        const listItem = target.parentElement;
        const index = Array.from(listItem.parentElement.children).indexOf(listItem);
        
        filteredHistory.splice(index, 1);
        
        renderWithdrawList(filteredHistory);
    }
});

/**
 * 모달 handling
 */

const modal=document.querySelector(".modal");
const closeBtn=document.querySelector(".closeBtn");

function openModal(){
    modal.style.display = 'flex';
}
function closeModal(){
    modal.style.display="none";
}

const modalOpen = document.querySelector(".plus-btn");
modalOpen.addEventListener("click",openModal);
closeBtn.addEventListener("click",closeModal)



/**
 * 내역 추가 기능 구현
 */

const select = document.querySelector('.category');
let income_option = new Option("교육알바", "행사알바");
select.options.add(income_option)
document.querySelector('.modal-income__checkbox').addEventListener('change', function() {
    updateSelectOptions(this.checked, '교육알바', '행사알바');
});

document.querySelector('.modal-expend__checkbox').addEventListener('change', function() {
    updateSelectOptions(this.checked, '주차비', '교통비');
});

function updateSelectOptions(isChecked, option1, option2) {
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    select.innerHTML = '';

    if (isChecked) {
        let incomeOption = new Option(option1, option1);
        let expendOption = new Option(option2, option2);
        select.options.add(incomeOption);
        select.options.add(expendOption);
    }
}