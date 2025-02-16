/* text.js */
// span 요소 노드 가져오기

window.onload = setTimeout(function () {
    const spanEl = document.querySelector("main h2 span");
    // 화면에 표시할 문장 배열
    
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', ];
    // 배열의 인덱스 초깃값
    let index = 0;
    // 화면에 표시할 문장 배열에서 텍스트를 하나 가져온 뒤, 배열로 만들기
    let currentTxt = txtArr[index].split("");

    function writeTxt() { // ①
        spanEl.textContent += currentTxt.shift();
        if (currentTxt.length !== 0) { // ②
            setTimeout(writeTxt, Math.floor(Math.random() * 170));
        } else { // ③
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 2500);
        }
    }

    function deleteTxt() {
        currentTxt.pop(); // ①
        spanEl.textContent = currentTxt.join(""); // ②
        if (currentTxt.length !== 0) { // ③
            setTimeout(deleteTxt, Math.floor(Math.random() * 150))
        } else { // ④
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }
    writeTxt();
},2000);

/* End text.js */