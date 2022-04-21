class exercise{

}

window.addEventListener('load',()=>{
    
    

    const form=document.querySelector("#new-exercises-form");
    const exerciseName=document.querySelector("#new-exercises-name");
    const exerciseSet=document.querySelector("#new-exercises-set");
    const exerciseList=document.querySelector("#exercises");
    
    
   // var exerciseListLoad=JSON.parse(localStorage.getItem('myList'))
    //if(exerciseListLoad.length>0){
   //     for (i = 0; i < exerciseListLoad.length; i++) 
   //     {
   //         exerciseList.appendChild(JSON.parse(exerciseListLoad[i]));
   //     }
   // }

    //const exercise_el2=document.createElement("div");
    //exercise_el2.classList.add("exercise");
    //var input=JSON.parse(localStorage.getItem('inputArray')||"[]");
    //var action=JSON.parse(localStorage.getItem('actionArray'||"[]"));
    //if (input.length>0 && action.length>0) {
    //    for (let index = 0; index < input.length; index++) {
    //        exercise_el2.appendChild(input[index]);
    //        exercise_el2.appendChild(action[index]);
    //        exerciseList.appendChild(exercise_el2);
    //    }
    //}

    //this stop refreshing the page with submit button.
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        const exerciseN= exerciseName.value;
        const exerciseS=exerciseSet.value;

        if(!exerciseN){
            alert("Please fill out the exercise name");
            return;
        }
        else if (!exerciseS) {
            alert("Please fill out the exercise set");
            return;
        }
        
        const exercise_el=document.createElement("div");
        exercise_el.classList.add("exercise");
        
        const exercise_content_el=document.createElement("div");
        exercise_content_el.classList.add("content");
        
        const exercise_input_el=document.createElement("input");
        exercise_input_el.classList.add("text");
        exercise_input_el.type="text";
        exercise_input_el.value=exerciseN +" X "+ exerciseS + " SET";
        exercise_input_el.setAttribute("readonly","readonly");
        
        
        //
        //exercise_input_array=[];
        //exercise_input_array.push(exercise_input_el);
        //localStorage.setItem('inputArray',JSON.stringify(exercise_input_array));
        //


        exercise_content_el.appendChild(exercise_input_el);

        const exercise_action_el=document.createElement("div");
        exercise_action_el.classList.add("action");

        const exercise_edit_el=document.createElement("button");
        exercise_edit_el.classList.add("edit");
        exercise_edit_el.innerHTML="EDIT";

        const exercise_delete_el=document.createElement("button");
        exercise_delete_el.classList.add("delete");
        exercise_delete_el.innerHTML="DELETE";

        //
        //    exercise_action_array=[];
        //    exercise_action_array.push(exercise_action_el);
        //    localStorage.setItem('actionArray',JSON.stringify(exercise_action_array));
        //

        exercise_action_el.appendChild(exercise_edit_el);
        exercise_action_el.appendChild(exercise_delete_el);

        

        //exercise_el has content and buttons
        exercise_el.appendChild(exercise_content_el);
        exercise_el.appendChild(exercise_action_el),
        
        //
        //exercise_el_array=[];
        //exercise_el_array.push(exercise_el);
        //localStorage.setItem('exerciseArray',exercise_el_array);
        //

        //exerciseList cover all elemnts
        exerciseList.appendChild(exercise_el);

        exerciseName.value="";
        exerciseSet.value="";

        exercise_edit_el.addEventListener('click',()=>{
            if (exercise_edit_el.innerText=="EDIT") {
                exercise_input_el.removeAttribute("readonly");
                exercise_input_el.focus();
                exercise_edit_el.innerText="SAVE";
            }
            else{
                exercise_input_el.setAttribute("readonly","readonly");
                exercise_edit_el.innerText="EDIT";
            }
            
        });

        exercise_delete_el.addEventListener('click',()=>{
            exerciseList.removeChild(exercise_el);
        });

        
        //var Save=document.querySelector("#btnSave");
        //Save.addEventListener('click',()=>{
        //    var exerciseListJason=JSON.stringify(exercise_el_array);
        //    localStorage.setItem('myList',exerciseListJason);
       // }); 
       var Save=document.querySelector("#btnScreen");
       Save.addEventListener('click',()=>{
            const screenshotTarget = document.querySelector("#exercises");

            html2canvas(screenshotTarget).then((canvas) => {
                document.body.appendChild(canvas);
            });
       });
       
    });


});