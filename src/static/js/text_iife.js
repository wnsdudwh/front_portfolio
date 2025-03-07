/* text.js */
window.onload = setTimeout(function () {
    // span 요소 노드 가져오기
    const span = document.querySelector("#txtSpan");

    // 화면에 표시할 문장 배열
    const txt1 = ['ㅍ', '푸', '풀', '풄', '풀스', '풀슽', '풀스태', '풀스택', '풀스택 ', '풀스택 ㄱ', '풀스택 개', '풀스택 갭', '풀스택 개바', '풀스택 개발', '풀스택 개발ㅈ', '풀스택 개발자']
    const txt2 = ['ㅂ', '배', '백', '백ㅇ', '백에', '백엔', '백엔ㄷ', '백엔드', '백엔드 ', '백엔드 ㄱ', '백엔드 개', '백엔드 갭', '백엔드 개바', '백엔드 개발', '백엔드 개발ㅈ', '백엔드 개발자']
    const txt3 = ['ㅍ', '프', '플', '프로', '프론ㅌ', '프론트', '프론틍', '프론트에', '프론트엔', '프론트엔ㄷ', '프론트엔드', '프론트엔드 ', '프론트엔드 ㄱ', '프론트엔드 개', '프론트엔드 갭', '프론트엔드 개바', '프론트엔드 개발', '프론트엔드 개발ㅈ', '프론트엔드 개발자']
    const txt4 = ['ㅇ', '우', '웨', '웹', '웹 ', '웹 ㄱ', '웹 개', '웹 갭', '웹 개바', '웹 개발', '웹 개발ㅈ', '웹 개발자']

    const txtArr = [txt1, txt2, txt3, txt4]

    let currentTxt = [];

    // 배열의 인덱스 초깃값
    let index = 0;
    function mainTxt() {
        // 화면에 표시할 문장 배열에서 텍스트를 하나 가져온 뒤, 배열로 만들기
        currentTxt = [...txtArr[index]];

        function writeTxt() {
            // 배열 왼쪽 요소부터 하나씩 빼서 출력
            span.textContent = currentTxt.shift();
            if (currentTxt.length !== 0) {
                // 모든 단어가 다 빠질때까지 재귀호출
                setTimeout(writeTxt, Math.floor(Math.random() * 250));
            } else {
                // 다 빠진 경우 현재 출력된 단어를 한글자씩 배열로 분리 후 삭제함수 호출
                currentTxt = span.textContent.split("");
                // 자 로 끝나는 경우 처음 지워질 때 ㅈ이 남아야 함
                currentTxt.splice(currentTxt.length - 1, 0, "ㅈ");
                setTimeout(deleteTxt, 2500);
            }
        }
        writeTxt();
    }

    function deleteTxt() {
        // 한글자씩 제거
        currentTxt.pop();
        span.textContent = currentTxt.join("");
        // 글자 길이가 0이 될때까지 재귀호출
        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 400))
        } else {
            // 다 지워지면 다음 배열로 넘어간 뒤 출력 함수 호출
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index];
            setTimeout(mainTxt, 1000);
        }
    }
    // index 값을 조정하여 반복
    if (index === txtArr.length) index = 0;

    mainTxt();
}, 2000);