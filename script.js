document.addEventListener('DOMContentLoaded', function() {
    // 기본 요소 선택 (안전하게 null 체크)
    const titleElement = document.querySelector('h1');
    const loginButton = document.querySelector('.login-btn');
    const mainImage = document.querySelector('#main-img');

    console.log('요소를 찾았습니다:', titleElement, loginButton);

    if (loginButton) {
        loginButton.addEventListener('click', function() {
            alert('로그인 버튼이 클릭되었습니다!');

            if (titleElement) {
                titleElement.textContent = '새로운 제목입니다!';
                titleElement.style.color = 'blue';
                titleElement.style.fontSize = '24px';
            }

            if (mainImage) {
                mainImage.style.backgroundColor = '#f0f0f0';
                mainImage.textContent = '자바스크립트로 내용과 배경색이 변경되었습니다.';
            }
        });
    }

    // 오늘의 한만디 관련 요소
    const todayEl = document.querySelector('#today');
    const quoteEl = document.querySelector('#quote');
    const randBtn = document.querySelector('#rand-btn');
    const themeToggle = document.querySelector('#theme-toggle');

    const sentences = [
        '오늘도 한 발짝, 작은 성취가 큰 변화를 만든다.',
        '행복은 멀리 있지 않다 — 지금 이 순간을 바라보라.',
        '실패는 끝이 아니라 더 좋은 시작의 밑거름이다.',
        '당신의 노력은 언젠가 반드시 빛을 발할 것이다.',
        '작은 친절이 큰 힘이 된다 — 누군가의 하루를 바꿔라.'
    ];

    // 현재 날짜 표시
    if (todayEl) {
        const now = new Date();
        const y = now.getFullYear();
        const m = now.getMonth() + 1;
        const d = now.getDate();
        todayEl.textContent = `${y}년 ${m}월 ${d}일`;
    }

    // 랜덤 문장 버튼
    if (randBtn && quoteEl) {
        randBtn.addEventListener('click', function() {
            const idx = Math.floor(Math.random() * sentences.length);
            quoteEl.textContent = sentences[idx];
        });
    }

    // 테마(다크/라이트) 적용 및 저장
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        if (themeToggle) themeToggle.textContent = theme === 'dark' ? '라이트 모드' : '다크 모드';
    };

    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            localStorage.setItem('theme', next);
        });
    }
});