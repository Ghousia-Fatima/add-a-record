// function addRecord()
// {
//     var input = document.querySelector('input')
//     var val = input.value
//     console.log(val)
//     input.value = ""
    
// }

// var name = document.querySelector('input')
var arr=[1]
function addRecord(e)
{
    e.preventDefault()
    var counter = arr.length
    // var slNo=document.sample.slNo.value;
    var name=document.sample.name.value;
    

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
   
    var td2 = tr.appendChild(document.createElement('td'));

    // const numRows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
    td1.textcontent = counter
    arr.push(td1)

    // td1.innerHTML= numRows + 1;
    td2.innerHTML=name;

    document.getElementById('tb1').appendChild(tr);

    document.sample.name.value = ""

}
btn1.addEventListener('click', addRecord);


  