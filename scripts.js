document.addEventListener("DOMContentLoader", function() {
    
    let container = document.createElement('header');
    container.className = 'My Singing Friends';

    let button = document.createElement('button');
    document.body.appendChild(button)
    let btntxt = document.createTextNode('Sing!');
    button.appendChild(btntxt);

    let friendArray = [ "Brandy", "Dawana", "Bridgette", "Latonya", "Shunda"];

    let h3 = document.createElement('h3');
    let div = document.createElement('friend');
    let p = document.createElement('p');
    div.appendChild(p);
    

    let p1 = document.createTextNode('lines of code in the file, ');
    p.appendChild(p1);
    document.body.appendChild(p);

    let p2 = document.createTextNode('lines of code, ')
    p.appendChild(p2);
    document.body.appendChild(p);
    
    let p3 = document.createTextNode(' strikes one out, clears it all out, ');
    p.appendChild(p3);
    document.body.appendChild(p);

    let p4= document.createTextNode(' lines of code in the file ');
    p.appendChild(p4);
    document.body.appendChild(p);

    let p5 = document.createTextNode('no more lines of code in the file');
    p.appendChild(p5);
    document.body.appendChild(p)

    let f1 = document.createTextNode('Brandy');
    h3.appendChild(f1);
    document.body.appendChild(div);
    div.className = 'friend';
    
    let f2 = document.createTextNode('Dawand');
    h3.appendChild(f2);
    document.body.appendChild(div);
    div.className = 'friend';
    
    let f3 = document.createTextNode('Bridgette');
    h3.appendChild(f3);
    document.body.appendChild(div);
    div.className = 'friend';
    
    let f4 = document.createTextNode('Latonya');
    h3.appendChild(f4);
    document.body.appendChild(h4);
    div.className = 'friend';
    
    let f5 = document.createTextNode('Shunda');
    h3.appendChild(f5);
    document.body.appendChild(div);
    div.className = 'friend';


    button.addEventListener('click', function () {
        for (let i = 0; i < friendArray.length; i++) {
            let friends = friends[f];
        {
            for (let j = 99; j >= 1; j--) {
                let minusOne = j - 1;
                if (j === 2) {
                    console.log(2 + p1 + 2 + p2); + (friends +  p3 + 1 + p4);
                }else if (j === 1) {
                console.log(1 + p1 + 1 + p2);  + (friends +  p3 + p5);
                }else {
                console.log(j + p1 + j + p2);  + (friends + p3 + minusOne + p4);
            };
        }; 
    });   
});
