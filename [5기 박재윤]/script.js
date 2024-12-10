const stockData = [
    { name: "삼성전자", price: 72000, change: "+1.2%" },
    { name: "SK하이닉스", price: 122000, change: "+1.8%" },
    { name: "LG화학", price: 880000, change: "-0.8%" },
    { name: "현대차", price: 190000, change: "+2.0%" },
    { name: "네이버", price: 220000, change: "+1.0%" },
    { name: "삼성바이오로직스", price: 920000, change: "+0.7%" },
    { name: "카카오", price: 57000, change: "+0.5%" },
    { name: "포스코홀딩스", price: 300000, change: "+0.8%" },
    { name: "셀트리온", price: 170000, change: "-1.5%" },
    { name: "기아", price: 85000, change: "+2.3%" },
    { name: "삼성물산", price: 125000, change: "-0.3%" },
    { name: "LG전자", price: 140000, change: "+2.5%" },
    { name: "현대모비스", price: 260000, change: "+0.9%" },
    { name: "삼성SDI", price: 630000, change: "+1.8%" },
    { name: "한국전력", price: 22000, change: "-0.5%" },
    { name: "한화솔루션", price: 40000, change: "+3.1%" },
    { name: "KT&G", price: 80000, change: "+0.3%" },
    { name: "대한항공", price: 30000, change: "+2.1%" },
    { name: "HMM", price: 25000, change: "+0.8%" },
    { name: "한국조선해양", price: 120000, change: "+0.7%" },
    { name: "LG이노텍", price: 320000, change: "+1.0%" },
    { name: "한화에어로스페이스", price: 76000, change: "+2.4%" },
    { name: "SK아이이테크놀로지", price: 150000, change: "-0.9%" },
    { name: "두산에너빌리티", price: 23000, change: "+3.5%" },
    { name: "롯데케미칼", price: 230000, change: "-1.2%" },
    { name: "LG디스플레이", price: 18000, change: "-2.3%" },
    { name: "신한지주", price: 36000, change: "+1.5%" },
    { name: "KB금융", price: 48000, change: "+1.0%" },
    { name: "하나금융지주", price: 44000, change: "+0.9%" },
    { name: "기업은행", price: 12000, change: "+1.7%" },
    { name: "미래에셋증권", price: 8000, change: "+1.9%" },
    { name: "삼성생명", price: 60000, change: "+0.2%" },
    { name: "삼성화재", price: 200000, change: "+0.5%" },
    { name: "NH투자증권", price: 11000, change: "+1.3%" },
    { name: "대우조선해양", price: 22000, change: "-0.7%" },
    { name: "GS건설", price: 29000, change: "+0.6%" },
    { name: "현대건설", price: 39000, change: "+0.5%" },
    { name: "삼성엔지니어링", price: 24000, change: "+1.1%" },
    { name: "코웨이", price: 60000, change: "+0.8%" },
    { name: "현대중공업", price: 110000, change: "+1.3%" },
    { name: "롯데칠성음료", price: 180000, change: "+0.4%" },
    { name: "SK네트웍스", price: 5000, change: "+0.6%" },
    { name: "한화", price: 30000, change: "+0.9%" },
    { name: "LG생활건강", price: 800000, change: "-1.8%" },
    { name: "SK케미칼", price: 120000, change: "+2.0%" },
    { name: "OCI", price: 95000, change: "+0.5%" },
    { name: "LX인터내셔널", price: 30000, change: "+1.2%" },
    { name: "한온시스템", price: 15000, change: "-0.5%" },
    { name: "현대해상", price: 29000, change: "+0.9%" }
];

const bondData = [
    { name: "국채 10년", yield: "3.5%", type: "국채" },
    { name: "국채 5년", yield: "3.2%", type: "국채" },
    { name: "국채 3년", yield: "3.0%", type: "국채" },
    { name: "회사채 AA+", yield: "4.5%", type: "회사채" },
    { name: "회사채 A-", yield: "5.2%", type: "회사채" },
    { name: "지방채 서울시", yield: "3.8%", type: "지방채" },
    { name: "지방채 부산시", yield: "4.0%", type: "지방채" },
    { name: "한전채", yield: "3.6%", type: "특수채" },
    { name: "공사채", yield: "3.7%", type: "공공채" },
    { name: "신용채", yield: "5.0%", type: "신용채" },
    { name: "국채 1년", yield: "2.5%", type: "국채" },
    { name: "국채 6개월", yield: "2.0%", type: "국채" },
    { name: "회사채 BBB", yield: "6.5%", type: "회사채" },
    { name: "지방채 대전시", yield: "4.1%", type: "지방채" },
    { name: "지방채 광주시", yield: "4.2%", type: "지방채" },
    { name: "특수채 한국도로공사", yield: "3.9%", type: "특수채" },
    { name: "공공채 LH공사", yield: "4.0%", type: "공공채" },
    { name: "회사채 BB+", yield: "7.0%", type: "회사채" },
    { name: "국채 15년", yield: "3.8%", type: "국채" },
    { name: "국채 20년", yield: "4.0%", type: "국채" },
    { name: "국채 30년", yield: "4.2%", type: "국채" },
    { name: "공사채 한수원", yield: "4.3%", type: "공공채" },
    { name: "회사채 AA", yield: "4.6%", type: "회사채" },
    { name: "회사채 A", yield: "5.3%", type: "회사채" },
    { name: "특수채 코레일", yield: "4.1%", type: "특수채" },
    { name: "지방채 울산시", yield: "4.3%", type: "지방채" }, 
    { name: "지방채 제주도", yield: "4.4%", type: "지방채" }, 
    { name: "공사채 한국전력", yield: "4.5%", type: "공공채" }, 
    { name: "회사채 B+", yield: "7.5%", type: "회사채" }, 
    { name: "국채 2년", yield: "2.7%", type: "국채" }, 
    { name: "국채 25년", yield: "4.1%", type: "국채" }, 
    { name: "회사채 BBB+", yield: "6.8%", type: "회사채" }, 
    { name: "공사채 수자원공사", yield: "4.2%", type: "공공채" }, 
    { name: "특수채 한국공항공사", yield: "3.9%", type: "특수채" }, 
    { name: "국채 50년", yield: "4.5%", type: "국채" }, 
    { name: "국채 1개월", yield: "1.8%", type: "국채" }, 
    { name: "회사채 BB", yield: "7.2%", type: "회사채" }, 
    { name: "공사채 교통공사", yield: "4.1%", type: "공공채" }, 
    { name: "지방채 경기도", yield: "3.7%", type: "지방채" }, 
    { name: "지방채 충청북도", yield: "3.9%", type: "지방채" }, 
    { name: "공사채 SH공사", yield: "4.0%", type: "공공채" }, 
    { name: "특수채 한국토지주택공사", yield: "3.8%", type: "특수채" }, 
    { name: "회사채 BB-", yield: "7.7%", type: "회사채" }, 
    { name: "국채 4년", yield: "3.1%", type: "국채" }, 
    { name: "회사채 A+", yield: "5.0%", type: "회사채" }, 
    { name: "공사채 한전기술", yield: "4.3%", type: "공공채" } 
];

const fundData = [ { name: "코스피 ETF", return: "+10%", type: "주식형 펀드" }, 
    { name: "글로벌 채권 펀드", return: "+5%", type: "채권형 펀드" }, 
    { name: "혼합형 펀드", return: "+7%", type: "혼합형 펀드" }, 
    { name: "배당주 펀드", return: "+8%", type: "배당형 펀드" }, 
    { name: "적립식 펀드", return: "+6%", type: "적립형 펀드" }, 
    { name: "원자재 펀드", return: "+12%", type: "원자재형 펀드" }, 
    { name: "헬스케어 펀드", return: "+9%", type: "섹터형 펀드" }, 
    { name: "IT 펀드", return: "+15%", type: "테마형 펀드" }, 
    { name: "친환경 펀드", return: "+11%", type: "테마형 펀드" }, 
    { name: "신흥시장 펀드", return: "+14%", type: "글로벌 펀드" }, 
    { name: "미국 주식 펀드", return: "+13%", type: "글로벌 펀드" }, 
    { name: "유럽 주식 펀드", return: "+8%", type: "글로벌 펀드" }, 
    { name: "아시아 채권 펀드", return: "+6%", type: "채권형 펀드" }, 
    { name: "글로벌 배당 펀드", return: "+10%", type: "배당형 펀드" },
    { name: "국내 중소형 펀드", return: "+9%", type: "중소형주 펀드" }, 
    { name: "글로벌 원자재 펀드", return: "+14%", type: "원자재형 펀드" }, 
    { name: "배당 성장 펀드", return: "+7%", type: "배당형 펀드" }, 
    { name: "국채 펀드", return: "+5%", type: "채권형 펀드" }, 
    { name: "하이일드 채권 펀드", return: "+9%", type: "채권형 펀드" }, 
    { name: "저변동성 펀드", return: "+6%", type: "혼합형 펀드" }, 
    { name: "성장주 펀드", return: "+12%", type: "주식형 펀드" }, 
    { name: "혁신 기술 펀드", return: "+15%", type: "테마형 펀드" }, 
    { name: "에너지 펀드", return: "+10%", type: "원자재형 펀드" }, 
    { name: "신재생 에너지 펀드", return: "+13%", type: "테마형 펀드" }, 
    { name: "AI 기술 펀드", return: "+14%", type: "테마형 펀드" }, 
    { name: "전기차 펀드", return: "+15%", type: "테마형 펀드" }, 
    { name: "바이오 테크 펀드", return: "+11%", type: "섹터형 펀드" }, 
    { name: "글로벌 중소형주 펀드", return: "+12%", type: "글로벌 펀드" }, 
    { name: "미국 국채 펀드", return: "+5%", type: "채권형 펀드" }, 
    { name: "ESG 펀드", return: "+10%", type: "테마형 펀드" }, 
    { name: "중국 소비재 펀드", return: "+9%", type: "글로벌 펀드" }, 
    { name: "베트남 성장 펀드", return: "+14%", type: "글로벌 펀드" }, 
    { name: "국내 소비재 펀드", return: "+8%", type: "섹터형 펀드" }, 
    { name: "인프라 펀드", return: "+7%", type: "원자재형 펀드" }, 
    { name: "고배당 펀드", return: "+8%", type: "배당형 펀드" }, 
    { name: "아시아 성장 펀드", return: "+13%", type: "글로벌 펀드" }, 
    { name: "농업 펀드", return: "+9%", type: "테마형 펀드" }, 
    { name: "국내 가치주 펀드", return: "+6%", type: "주식형 펀드" }, 
    { name: "글로벌 IT 펀드", return: "+14%", type: "테마형 펀드" }, 
    { name: "한국 대형주 펀드", return: "+9%", type: "주식형 펀드" }, 
    { name: "글로벌 헬스케어 펀드", return: "+11%", type: "섹터형 펀드" }, 
    { name: "전환사채 펀드", return: "+5%", type: "채권형 펀드" }, 
    { name: "신재생 에너지 채권 펀드", return: "+7%", type: "채권형 펀드" }, 
    { name: "부동산 투자 펀드", return: "+8%", type: "원자재형 펀드" }, 
    { name: "원자재 채권 펀드", return: "+6%", type: "채권형 펀드" }, 
    { name: "AI 주도 펀드", return: "+13%", type: "테마형 펀드" } ];

// 공통 검색 함수
function searchData(dataArray, inputId, outputId) {
    const input = document.getElementById(inputId).value.trim();
    const result = dataArray.find(item => item.name === input);
    const outputDiv = document.getElementById(outputId);

    if (result) {
        outputDiv.innerHTML = `<p>${result.name}: ${
            result.price || result.yield || result.return
        } (${result.type || result.change || ""})</p>`;
    } else {
        outputDiv.innerHTML = "<p>해당 항목을 찾을 수 없습니다.</p>";
    }
}

// 주식 검색
function searchStock() {
    searchData(stockData, "stock-input", "stock-info");
}

// 채권 검색
function searchBond() {
    searchData(bondData, "bond-input", "bond-info");
}

// 펀드 검색
function searchFund() {
    searchData(fundData, "fund-input", "fund-info");
}

// 포트폴리오 시뮬레이터
function simulatePortfolio() {
    const amount = parseFloat(document.getElementById("investment-amount").value);
    const riskTolerance = document.getElementById("risk-tolerance").value;
    const goal = document.getElementById("investment-goal").value;

    if (isNaN(amount) || amount <= 0) {
        alert("올바른 투자 금액을 입력하세요.");
        return;
    }

    let portfolio, expectedReturn;

    if (riskTolerance === "low") {
        portfolio = "채권 70%, 주식 20%, 현금 10%";
        expectedReturn = goal === "long-term" ? "4~5%" : "2~3%";
    } else if (riskTolerance === "medium") {
        portfolio = "채권 50%, 주식 40%, 현금 10%";
        expectedReturn = goal === "long-term" ? "6~8%" : "4~6%";
    } else if (riskTolerance === "high") {
        portfolio = "채권 20%, 주식 70%, 현금 10%";
        expectedReturn = goal === "long-term" ? "8~12%" : "6~9%";
    } else {
        alert("올바른 위험 성향을 선택하세요.");
        return;
    }

    const result = `
        <p>시뮬레이션 결과:</p>
        <ul>
            <li>투자 금액: ${amount.toLocaleString()} 원</li>
            <li>위험 성향: ${riskTolerance === "low" ? "낮음" : riskTolerance === "medium" ? "중간" : "높음"}</li>
            <li>투자 목표: ${goal === "short-term" ? "단기" : "장기"}</li>
            <li>추천 포트폴리오: ${portfolio}</li>
            <li>예상 수익률: ${expectedReturn}</li>
        </ul>
    `;
    document.getElementById("simulation-result").innerHTML = result;
}

// 세금 계산기
function calculateTax() {
    const income = parseFloat(document.getElementById("income").value);
    const taxRate = 0.15; // 세율 15%
    if (!isNaN(income) && income > 0) {
        const tax = income * taxRate;
        document.getElementById("tax-result").innerText = `예상 세금: ${tax.toLocaleString()} 원`;
    } else {
        alert("올바른 금액을 입력하세요.");
    }
}

// 환율 변환기
function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const currency = document.getElementById("currency").value;
    const exchangeRates = { USD: 1200, EUR: 1400, JPY: 11 };

    if (!isNaN(amount) && exchangeRates[currency]) {
        const converted = amount * exchangeRates[currency];
        document.getElementById("currency-result").innerText = `${amount.toLocaleString()} ${currency} = ${converted.toLocaleString()} KRW`;
    } else {
        alert("올바른 금액과 통화를 입력하세요.");
    }
}

// 이벤트 리스너 추가
document.getElementById("simulate-button").addEventListener("click", simulatePortfolio);
document.getElementById("tax-button").addEventListener("click", calculateTax);
document.getElementById("currency-button").addEventListener("click", convertCurrency);

// 홈으로 이동
function goHome() {
    window.location.href = "index.html";
}


// 펀드 리스트 초기화 (For fund.html)
const fundListDiv = document.getElementById('fund-list');
if (fundListDiv) {
    fundData.forEach(fund => {
        const fundElement = document.createElement('p');
        fundElement.innerText = `${fund.name} - 수익률: ${fund.return} (${fund.type})`;
        fundListDiv.appendChild(fundElement);
    });
}
