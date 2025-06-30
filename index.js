

  const ListData = JSON.parse(localStorage.getItem("todoList")) || [];
    function saveToLocal() {
        localStorage.setItem("todoList", JSON.stringify(ListData));
    }
   
        function Adddata() {
           
            let inputdataa = document.getElementById("input-box").value
            let inputdata = inputdataa.trim()
             let isDuplicate = ListData.find(item => item.data.toLowerCase() === inputdata.toLowerCase());
            if (inputdata.length > 0 )
              if(!isDuplicate){
                ListData.push({ data: inputdata, completed: false })
                alert("Succefully Add Your Task ✔️")
                document.getElementById("input-box").value = ""
                ListValue();
                saveToLocal();
            }else{
                alert("Please cannot Enter Your duplicate Name ❌")
            }else{
              alert("Please Enter Your Task Name ⚠️")
            }

        }


        function ListValue() {
            let contandId = document.getElementById("list-data")
            contandId.innerHTML = "";
            ListData.forEach((item, index) => {
                contandId.innerHTML += `
         <div id="data-box">
        <span class="data-check"  onclick="CompleteTask(${index})">✔️</span>
        <span class="data-text" style="text-decoration: ${item.completed ? 'line-through' : 'none'}" >${item.data}</span>
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

        function CompleteTask(e){
         ListData[e].completed = !ListData[e].completed;
         saveToLocal()
         ListValue()
        }
 
     

 window.onload = () => {
        ListValue();
    };