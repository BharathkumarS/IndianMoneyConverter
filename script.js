
function doThat(){
    let b =["ind","usa","uk","russia","china"]
    let choose = document.getElementById('hello');
    let a = choose[choose.selectedIndex].value;
    let two = document.getElementById('two');
    let three= Number(document.getElementById('three').value);

    for(let i=0;i<=b.length;i++){
        if(a=="ind"){
            let f = three;
            two.innerHTML=f.toFixed(2);
        }
        else if(a=="usa"){
            let q = three*0.012;
            two.innerHTML=q.toFixed(2);
        }
        else if(a=="uk"){
            let p= three*0.0091
            two.innerHTML=p.toFixed(2);
        }
        else if(a=="russia"){
            let u = three*1.09;
            two.innerHTML = u.toFixed(2);
        }
        else if(a=="china"){
            let k = three*0.085;
            two.innerHTML = k.toFixed(2);
        }
    }

}
