document.addEventListener("DOMContentLoaded",function(){
    let active_element = document.getElementById('value-1');
    const url = "http://127.0.0.1:5000";
    var question_names={};
    function generateQuestions(questions) {
        var htmlContent ='';
        questions.forEach((item, index) => {
            question_names["question-"+(index+1).toString()]=item.question;
            if (item.question_type === 0) {
                // Question type 0: Radio buttons
                htmlContent += `
                    
                        <div class="question">
                            <p class="question-text">${item.question}</p>
                            <div class="options">
                                ${item.options.map(option => `
                                    <label>
                                        <input type="radio" name="question-${index + 1}" value="${option}">
                                        ${option}
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                    
                `;
            } else if (item.question_type === 1) {
                // Question type 1: Textarea
                htmlContent += `
                        <div class="question">
                            <p class="question-text">${item.question}</p>
                            <textarea name="question-${index + 1}" rows="4" cols="50" placeholder="Please type your answer here..."></textarea>
                        </div>
                    
                `;
            }
        });
        document.getElementById('course-q').innerHTML=htmlContent;
        
    }
    document.getElementById("value-1").addEventListener("click",function(){
        //console.log(active_element);
        if(active_element !== this){
            active_element = this;
            document.getElementById("page-body").innerHTML = document.getElementById("page-body").innerHTML = "<div class=\"css-c\"> \
            <div class=\"card\"> \
                <h1 class=\"hclass\">Kevin</h1> \
            </div> \
        </div>";
        
        }
    });
    document.getElementById("value-3").addEventListener("click",function(){
        //console.log(active_element);
        if(active_element !== this){
            active_element = this;
            document.getElementById("page-body").innerHTML = 
"<div class=\"div4\">" +
    "<div class=\"searchbar\">" +
        "<div class=\"searchBox\">" +
            "<input class=\"searchInput\" type=\"text\" name=\"\" placeholder=\"Search something\">" +
            "<button class=\"searchButton\" href=\"#\">" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\">" +
                    "<g clip-path=\"url(#clip0_2_17)\">" +
                        "<g filter=\"url(#filter0_d_2_17)\">" +
                            "<path d=\"M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" shape-rendering=\"crispEdges\"></path>" +
                        "</g>" +
                    "</g>" +
                    "<defs>" +
                        "<filter id=\"filter0_d_2_17\" x=\"-0.418549\" y=\"3.70435\" width=\"29.7139\" height=\"29.7139\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">" +
                            "<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>" +
                            "<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>" +
                            "<feOffset dy=\"4\"></feOffset>" +
                            "<feGaussianBlur stdDeviation=\"2\"></feGaussianBlur>" +
                            "<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>" +
                            "<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\"></feColorMatrix>" +
                            "<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_2_17\"></feBlend>" +
                            "<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_2_17\" result=\"shape\"></feBlend>" +
                        "</filter>" +
                        "<clipPath id=\"clip0_2_17\">" +
                            "<rect width=\"28.0702\" height=\"28.0702\" fill=\"white\" transform=\"translate(0.403503 0.526367)\"></rect>" +
                        "</clipPath>" +
                    "</defs>" +
                "</svg>" +
            "</button>" +
        "</div>" +
    "</div>" +
    "<div class=\"searchresult\">" +
        "<div class=\"card1\">" +
            "<div class=\"card1-image\"></div>" +
            "<div class=\"category\">Web Development</div>" +
            "<div class=\"heading\">Master HTML and CSS for Modern Web Design" +
                "<div class=\"author\">By <span class=\"name\">Abi</span> 4 days ago</div>" +
            "</div>" +
        "</div>" +
        "<div class=\"card1\">" +
            "<div class=\"card1-image\"></div>" +
            "<div class=\"category\">Machine Learning</div>" +
            "<div class=\"heading\">Deep Learning Essentials with Python and TensorFlow" +
                "<div class=\"author\">By <span class=\"name\">Abi</span> 4 days ago</div>" +
            "</div>" +
        "</div>" +
        // Add other cards similarly here...
    "</div>" +
"</div>";

        
        }
    });
    document.getElementById("value-2").addEventListener("click",function(){
        function getQuestionAnswers() {
    let result = {};

    // Get all form elements with name starting with 'question-'
    //const elements = document.querySelectorAll('input[name^="question-"], select[name^="question-"], textarea[name^="question-"]');

   
       

    // Log the result as a JSON object
    console.log(JSON.stringify(result, null, 2));
}

        //console.log(active_element);
        if(active_element !== this){
            active_element = this;
            document.getElementById("page-body").innerHTML = "<div class=\"div4\"> \
    <div class=\"courseheader\"> \
        <h1>Create Course</h1> \
    </div> \
    <div class=\"details\"> \
        <div class=\"defaultdetails\"> \
            <div class=\"courseimagewithedit\"> \
                <div class=\"course-image\"></div> \
                <div class=\"course-edit\"></div> \
            </div> \
            <div class=\"input-group input-t\"> \
                <input id = \"Title\" required=\"\" type=\"text\" name=\"text\" autocomplete=\"off\" class=\"input\"> \
                <label class=\"user-label\">Title</label> \
            </div> \
            <div class=\"input-group input-size-big\"> \
                <input id=\"Description\" required=\"\" type=\"text\" name=\"text\" autocomplete=\"off\" class=\"input input-d\"> \
                <label class=\"user-label\">Description</label> \
            </div> \
            <div class=\"outlined-select-container\"> \
                <select id=\"outlined-select\" class=\"outlined-select\"> \
                    <option value=\"technology\">Technology & Software</option> \
                    <option value=\"business\">Business & Entrepreneurship</option> \
                    <option value=\"personal-development\">Personal Development</option> \
                    <option value=\"health-fitness\">Health & Fitness</option> \
                    <option value=\"design-art\">Design & Art</option> \
                    <option value=\"languages\">Languages</option> \
                    <option value=\"science-mathematics\">Science & Mathematics</option> \
                    <option value=\"writing-communication\">Writing & Communication</option> \
                    <option value=\"marketing-sales\">Marketing & Sales</option> \
                    <option value=\"music-performing-arts\">Music & Performing Arts</option> \
                    <option value=\"lifestyle\">Lifestyle</option> \
                    <option value=\"career-development\">Career Development</option> \
                    <option value=\"history-culture\">History & Culture</option> \
                    <option value=\"finance-economics\">Finance & Economics</option> \
                    <option value=\"education-teaching\">Education & Teaching</option> \
                    <option value=\"home-garden\">Home & Garden</option> \
                </select> \
            </div> \
            <button class=\"btn1\" id = \"btngs\"> \
                <span>Get started</span> \
            </button> \
        </div> \
        <div id=\"coursedetails\"class=\"coursedetails\"> \
            <div class=\"NoContent\"> \
                <h1>No Content</h1> \
            </div> \
        </div> \
    </div> \
</div>";
document.getElementById("btngs").addEventListener("click", function () {
    let title = document.getElementById("Title").value.trim();
    let description = document.getElementById("Description").value.trim();
    let select_value = document.getElementById("outlined-select").value;

    if (!title || !description) {
        alert("Title and Description are required!");
        return;
    }

    let courseData = { title, description, category: select_value };
    document.getElementById("coursedetails").innerHTML = `
  <div class="NoContent">
    <div class="loader">
      <div class="circle">
        <div class="dot"></div>
        <div class="outline"></div>
      </div>
      <div class="circle">
        <div class="dot"></div>
        <div class="outline"></div>
      </div>
      <div class="circle">
        <div class="dot"></div>
        <div class="outline"></div>
      </div>
      <div class="circle">
        <div class="dot"></div>
        <div class="outline"></div>
      </div>
    </div>
  </div>
`;

    fetch(`${url}/getquestions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseData)
    })
    .then((response) => {
        if (!response.ok) 
            {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        else
        {
            document.getElementById("coursedetails").innerHTML = `
            <div id="course-p" class="course-pad">
              <div id="course-q" class="course-q">
              </div>
              <!-- Submit Button -->
              <button type="button" id="bt3" class="submit-btn btn3">Submit</button>
            </div>
          `;
          document.getElementById("bt3").addEventListener('click',function(){
            
                let result = {};
                //console.log(question_names);
                // Get all form elements with name starting with 'question-'
                const elements = document.querySelectorAll('input[name^="question-"], select[name^="question-"], textarea[name^="question-"]');
            
                elements.forEach(element => {
                    const name = element.name;
                    let value;
            
                    if (element.type === 'radio' || element.type === 'checkbox') {
                        // Handle radio and checkbox inputs
                        if (element.checked) {
                            // If checked, set the value of the element
                            if (!result[name]) {
                                result[question_names[name]] = [];
                            }
                            result[question_names[name]].push(element.value);
                        }
                    } else if (element.tagName === 'SELECT') {
                        // Handle select elements
                        value = element.value;
                        result[question_names[name]] = value;
                    } else {
                        // For other inputs (text, textarea, etc.)
                        value = element.value;
                        result[question_names[name]] = value;
                    }
                });
                
                // Log the result as a JSON object
                let title = document.getElementById("Title").value.trim();
                let description = document.getElementById("Description").value.trim();
                let select_value = document.getElementById("outlined-select").value;
                let GeneralAns = {
                    title:title,
                    description:description,
                    category:select_value
                }
                const CourseUserData = {
                    GeneralQuestions:GeneralAns,
                    GPTQuestions:result
                }
                console.log(CourseUserData);
                console.log(JSON.stringify(result, null, 2));
            
            
            
            
          });     
        return response.json();
        }
    })
    .then((data) => {
        console.log("Response from server:", data);
        const questions = JSON.parse(data);
        console.log(questions);
        generateQuestions(questions);
    })
    .catch((error) => console.error("Error during fetch:", error));
});

        
        }
    });
});