

  const ListData = JSON.parse(localStorage.getItem("todoList")) || [];
    function saveToLocal() {
        localStorage.setItem("todoList", JSON.stringify(ListData));
    }
   
        function Adddata() {
        
            let inputdataa = document.getElementById("input-box").value
            let inputdata = inputdataa.trim()

            if (inputdata.length > 0) {
                ListData.push({ data: inputdata })
                alert("Succefully Add Your Task ✔️")
                document.getElementById("input-box").value = ""
                ListValue();
                saveToLocal();
            }else{
                alert("Please Enter Your Task Name ")
            }

        }


        function ListValue() {
            let contandId = document.getElementById("list-data")
            contandId.innerHTML = "";
            ListData.forEach((item, index) => {
                contandId.innerHTML += `
         <div id="data-box">
        <span class="data-check">✔️</span>
        <span class="data-text">${item.data}</span>
        <button class="remove-btn" onclick="Removedata(${index})">Remove</button>
        </div>`
            })
        }
        function Removedata(index) {
         let a = confirm("confirm, your remove task") 
          if(a){
            ListData.splice(index, 1);
            saveToLocal(); 
            ListValue();
          }else{
            alert("Not remove task")
          }
           
        }
 
     

 window.onload = () => {
        ListValue();
    };