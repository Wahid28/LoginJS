function terimainput(){
    var a = document.forms['biodata'] ['username'].value;
    var b = document.forms['biodata'] ['password'].value;
    var num = document.getElementById("tabelinput").rows.length;

    if(a === '' || b === ''){
        alert("Harap isi semua bidangnya!");
        return false;
    }

    var tabel = document.getElementById("tabelinput");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = num;
    cell2.innerHTML = a;
    cell3.innerHTML = b;


    alert("Data berhasil diinputkan");  
}

function hapusnilaitabel(){
    document.getElementById("tabelinput").deleteRow(1);
}

function hapustabel(){
var num = document.getElementById("tabelinput").rows.length;
    for (var i = 1; i <= num ; i+1){
        document.getElementById("tabelinput").deleteRow(i);
    }
}

/*function masuk(){
    var user = document.forms['biodata'] ['username'].value;
    var pass = document.forms['biodata'] ['password'].value;
    var num = document.getElementById("tabelinput").rows.length;
    var username = [];
    var password = [];
    var i;
        for (i = 1; i <= Number(num) ; i++){
            username[i-1] = document.getElementById("tabelinput").rows[i].cells[1].innerHTML;
            password[i-1] = document.getElementById("tabelinput").rows[i].cells[2].innerHTML;

            if(user != username[i-1] || pass != password[i-1]){
                document.body.style.backgroundColor = 'red'
                alert("Gagal Login")
                return false
            }
            else if(user === "" || pass === ""){
                document.body.style.backgroundColor = 'red'
                alert("Gagal Login")
                return false
            }
            else {
                document.body.style.backgroundColor = 'green'
                alert("Selamat Login")
                return true
            }
        }
    }*/

    function masuk(){
        var user = document.forms['biodata'] ['username'].value;
        var pass = document.forms['biodata'] ['password'].value;
        var num = document.getElementById("tabelinput").rows.length;
        var i;
            for (i = 1; i <= Number(num) ; i++){
                var username = document.getElementById("tabelinput").rows[i].cells[1].innerHTML;
                var password = document.getElementById("tabelinput").rows[i].cells[2].innerHTML;
    
                if(user != username || pass != password){
                    document.body.style.backgroundColor = 'red'
                    alert("Gagal Login")
                    return false
                }
                else if(user === "" || pass === ""){
                    document.body.style.backgroundColor = 'red'
                    alert("Gagal Login")
                    return false
                }
                else {
                    document.body.style.backgroundColor = 'green'
                    alert("Selamat Login")
                    return true
                }
            }
        }

           
