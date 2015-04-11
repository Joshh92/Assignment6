function MenuInput()
{
    if (document.getElementById("menu").value=="Add Customer")
    {
        document.getElementById("AddCustomer").style.visibility = "visible"
        document.getElementById("ChangeAddress").style.visibility = "hidden"
        document.getElementById("DeleteCustomer").style.visibility = "hidden"
    }
    else if (document.getElementById("menu").value=="Change Address")
    {
        document.getElementById("AddCustomer").style.visibility = "hidden"
        document.getElementById("ChangeAddress").style.visibility = "visible"
        document.getElementById("DeleteCustomer").style.visibility = "hidden"
    }
    else if (document.getElementById("menu").value=="Delete Customer")
    {
        document.getElementById("AddCustomer").style.visibility = "hidden"
        document.getElementById("ChangeAddress").style.visibility = "hidden"
        document.getElementById("DeleteCustomer").style.visibility = "visible"
    }
}

function CreateCustomer()
{
    var objRequest = new XMLHttpRequest()
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    var customercity = document.getElementById("custcity").value;
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'","City":"'+customercity+'"}';
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result); 
        }
    }
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
    
}

function updateOrderAddress()
{
    var objRequest_2 = new XMLHttpRequest()
    var url_2 =  "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    var orderID = document.getElementById("orderid").value;
    var shippingaddress = document.getElementById("shipaddress").value;
    var shippingcity = document.getElementById("shipcity").value;
    var shippingname = document.getElementById("shipname").value;
    var shippinpostalcode = document.getElementById("shipcode").value;
    var newaddress =  {"OrderID":orderid,"ShipName":"shipname","ShipAddress":"shipaddress","ShipCity":"shipcity","ShipPostcode":"shipcode"}
    objRequest_2.onreadystatechange = function()
    {
       if (objRequest.readyState == 4 && objRequest.status == 200)
       {
        var result_2 =JSON.parse(objRequest_2.responseText);
        OperationResult_2(result_2);
       }
    }
    objRequest.open("POST", url_2, true);
    objRequest.send(newaddress);
   
}

function deleteCustomer()
{
    var objRequest_3 = new XMLHttpRequest()
    var url_3 = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
    url_3 += document.getElementById("removeid").value;
    objRequest_3.onreadystatechange = function()
    {
        if (objRequest_3.readyState == 4 && objRequest_3.status == 200)
        {
            var result_3 = JSON.parse(objRequest_3.responseText);
            OperationResult_3(result_3);
        }
    }
    objRequest_3.open("GET",url_3,true);
    objRequest_3.send();
}


function OperationResult(output)
{
    if (output.WasSuccessful == 0)
    {
        document.getElementById("result").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}
function OperationResult_2(output)
{
    if (output.WasSuccessful == 0)
    {
        document.getElementById("result_2").innerHTML = "The operation was successful!";
    }
    else if (output.WasSuccessful == -1)
    {
        document.getElementById("result_2").innerHTML = "The operation was successful!";
    }
    else if (output.WasSuccessful == -2)
    {
        document.getElementById("result_2").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result_2").innerHTML = "The operation was successful!";
    }
}





function OperationResult_3(output)
{
    if (output.DeleteCustomerResult.WasSuccessful == 1)
    {
        document.getElementById("result_3").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result_3").innerHTML = "The operation was not successful!" + "<br>" + output.DeleteCustomerResult.Exception;
    }
    
}