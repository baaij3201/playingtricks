const button = document.getElementById('揭晓结果');
button.addEventListener('click', function () {
    const name = document.getElementById('name').value
    const iq = document.getElementById('iq').value
    const height = document.getElementById('height').value
    const like = document.getElementById('like').value
    const age = document.getElementById('age').value
    const radios = document.querySelectorAll('input[name="gender"]');
    let selectedValue = '无性神人';
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break;
        }
    }
    if (age > 110 ) alert(name + ',你还太年轻了');

    if (age < 18 || age > 110 ) alert(name + ',你是未成年人，别看了，你是不可理喻的');
    else {
        if (age < 25) alert('年轻人啊，以下是结果');
        if (age > 65) alert('老毕登啊，以下是结果');
        const output = document.getElementById('output');
        alert(name + ',你的性别是:' + selectedValue);
        if (iq <= 145 && iq >= 60) alert(name + ',你的智商是:' + iq);
        else if (iq < 60) alert(name + ',你是弱智！');
        else alert(name + ',你爱撒谎！');
        if (height <= 200 && height >= 150) alert(name + ',你的身高是:' + iq);
        else if (height < 150) alert(name + ',你是小矮人！');
        else alert(name + ',你爱谎报身高！');
        alert(name + ',你爱' + like);
        alert(name + ',你是傻逼');
    }    
});
