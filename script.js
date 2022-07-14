
                $(document).ready(function () {
            
                    $("#toggleForm").click(function(){
                        $("#form").toggle();
                    });

                
                    fetch('https://jsonplaceholder.typicode.com/posts', {
                        method: 'POST',
                        body: JSON.stringify({
                        title: title,
                        body: body,
                        userId: 1,
                    }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((json) => console.log(json));




                    // var form = document.getElementById('form')
                    // form.addEventListener('submit',function(e){
                    //     e.preventDefault()
                    //     var title = document.getElementById('title').value
                    //     var body = document.getElementById('body').value
                    //     $.post("https://jsonplaceholder.typicode.com/posts",{
                    //         title:title,
                    //         body:body
                    //     },function(data){
                    //         console.log(data)
                    //         alert("Successful!")
                    //     })
                    // });

                    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
                        return response.json();
                    }).then((objectData)=>{
                        let tableData="";
                        objectData.map((values)=>{
                            tableData+=
                            `<tr>
                            <th>${values.userId}</th>
                            <th>${values.id}</th>
                            <th>${values.title}</th>
                            <th>${values.body}</th>
                            </tr>`;
                        });
                        document.getElementById("table_body").innerHTML=tableData;
                    }).catch((err)=>{
                        console.log(err);
                        alert(err);
                    });

                });
            
