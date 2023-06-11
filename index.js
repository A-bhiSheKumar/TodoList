//when button got clicked 
$("#add").on("click"  ,function(event){
    if(event.type === "click" ){
        if($("#task-input").val().length===0){
            alert("Kindly enter your task names");
        }
        else{
            $('#written-task').append(`
                <div class="task">
                    <span id="taskname">
                        ${$('#task-input').val()}
                    </span>
                    <button class="delete">
                        <box-icon type='solid' name='trash'></box-icon>
                    </button>
                 </div>
            `);
            
            $("#task-input").val('');
            
            $('.delete').click(function() {
                $(this).parent().remove();
            });
    
        }
    }
   
});



// when enter is pressed 
$(document).on('keypress', function(event) {
    if (event.which === 13) {
        if($("#task-input").val().length===0){
            alert("Kindly enter your task names");
        }
        else{
            $('#written-task').append(`
                <div class="task">
                    <span id="taskname">
                        ${$('#task-input').val()}
                    </span>
                    <button class="delete">
                        <box-icon type='solid' name='trash'></box-icon>
                    </button>
                 </div>
            `);
    
            $("#task-input").val('');
    
            $('.delete').click(function() {
                $(this).parent().remove();
            });
    
        }
    }
});






