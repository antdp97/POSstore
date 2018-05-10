            var array = [];
            var array2= [];
            var rowarray = [];
            var sum123 =0;
            var sumnum =0;


            function find(){
                 /*var x = document.getElementById("find").value;
                    document.getElementById(x).click();*/
                btnadd = document.getElementById("add-cart");
                btnadd.remove();
                var btn = document.createElement("BUTTON");
                var t = document.createTextNode("Add");
                btn.appendChild(t);
                document.getElementById("findd").appendChild(btn);
                btn.id="add-cart";
                btn.addEventListener("click", function(){
                    var a = document.getElementById("find").value;
                    if (a=="Nani"){
                        var b = 0;
                        b = 125;
                        var check = false;
                        var check2 = 0;
                        for (i=0;i<array.length;i++){
                            if (a == array[i]){
                                check = true;
                                check2 = i;
                            }
                        }
                        if (check){
                           var index = array.indexOf(a);
                           array2[index] = array2[index]+1;
                           var x = document.getElementById("ListItem").rows.length;
                           if (x>1){
                              document.getElementById("ListItem").deleteRow(rowarray[index]);
                            }
                            var table = document.getElementById("ListItem");
                            var row = table.insertRow(rowarray[index]);
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            var cell3 = row.insertCell(2);
                            var cell4 = row.insertCell(3);
                            cell1.innerHTML = a;
                            cell2.innerHTML = b;
                            cell3.innerHTML = array2[index];
                            cell4.innerHTML = b*array2[index];
                            sum123 = sum123+b;
                            sumnum = sumnum + 1;
                            document.getElementById("sumnum").innerHTML = sumnum;
                            document.getElementById("sumprice").innerHTML = sum123;
                        }
                        else{
                            for (i=0;i<rowarray.length;i++){
                                rowarray[i] = rowarray[i] +1;
                            }
                            rowarray.push(0);
                            array.push(a);
                            array2.push(1);
                            var table = document.getElementById("ListItem");
                            var row = table.insertRow(0);
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                        var cell3 = row.insertCell(2);
                        var cell4 = row.insertCell(3);
                        cell1.innerHTML = a;
                        cell2.innerHTML = b;
                        cell3.innerHTML = 1;
                        cell4.innerHTML = b*1;
                        sum123 = sum123 + b;
                        sumnum = sumnum + 1;
                        document.getElementById("sumnum").innerHTML = sumnum;
                        document.getElementById("sumprice").innerHTML = sum123;
                    }
                    }
                    
                });
            }

  function myFunction(a,b) {
                var check = false;
                var check2 = 0;
                for (i=0;i<array.length;i++){
                    if (a == array[i]){
                        check = true;
                        check2 = i;
                    }
                }
                if (check){
                    var index = array.indexOf(a);
                    array2[index] = array2[index]+1;
                    var x = document.getElementById("ListItem").rows.length;
                    if (x>1){
                        document.getElementById("ListItem").deleteRow(rowarray[index]);
                    }
                    var table = document.getElementById("ListItem");
                    var row = table.insertRow(rowarray[index]);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    cell1.innerHTML = a;
                    cell2.innerHTML = b;
                    cell3.innerHTML = array2[index];
                    cell4.innerHTML = b*array2[index];
                    sum123 = sum123+b;
                    sumnum = sumnum + 1;
                    document.getElementById("sumnum").innerHTML = sumnum;
                    document.getElementById("sumprice").innerHTML = sum123;
                }
                else{
                    for (i=0;i<rowarray.length;i++){
                        rowarray[i] = rowarray[i] +1;
                    }
                    rowarray.push(0);
                    array.push(a);
                    array2.push(1);
                    var table = document.getElementById("ListItem");
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    cell1.innerHTML = a;
                    cell2.innerHTML = b;
                    cell3.innerHTML = 1;
                    cell4.innerHTML = b*1;
                    sum123 = sum123 + b;
                    sumnum = sumnum + 1;
                    document.getElementById("sumnum").innerHTML = sumnum;
                    document.getElementById("sumprice").innerHTML = sum123;
                }
        }
    //function for reseting the receipt
    function deletefunc(){
            var x = document.getElementById("ListItem").rows.length;
            for (i=1;i<x;i++){
                document.getElementById("ListItem").deleteRow(0);
            }
            var y = array.length;
            array=[];
            array2=[];
            rowarray=[];
            sum123 =0;
            sumnum =0;
            document.getElementById("sumnum").innerHTML = sumnum;
            document.getElementById("sumprice").innerHTML = sum123;
        }