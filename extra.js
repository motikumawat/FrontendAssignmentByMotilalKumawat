  $.getJSON("https://jsonplaceholder.typicode.com/posts", function (data) {
                        var student = '';
                        $.each(data, function (key, value) {                            
                            student += '<tr>';
                            student += '<td>' + value.userID + '</td>';
                            student += '<td>' + value.id + '</td>';
                            student += '<td>' + value.title + '</td>';
                            student += '<td>' + value.body + '</td>';
                            student += '</tr>';
                        });
                          
                        $('#tabular-table').append(student);
                    });
