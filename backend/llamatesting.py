from langchain_ollama import OllamaLLM

def generate_questions(course_details):
    # Initialize the Ollama client
    client = OllamaLLM(model="llama3:latest")

    # Define the prompt based on the course details
    prompt = f"""
<<SYS>>you are a helpful assistant. Always provide the output in list format of python consistently. Do not include extra lines like "Here are the generated questions in a list of dictionaries as per your request" or "Let me know if you need more!"</SYS>
Given the following course details in JSON format:
{{
    "title": "{course_details['title']}",
    "description": "{course_details['description']}",
    "category": "{course_details['category']}"
}}

Your task is to generate a list of relevant questions, but do not ask questions that have already been answered in the course description. For instance, if the user has already specified the course language in the description (e.g., "specifically for the language R"), avoid asking questions about the programming language. 

For each question, include:
- "question": A relevant question based on the course details.
- "question_type": 0 for multiple choice questions and 1 for user input questions.
- "options": A list of answer options if "question_type" is 0. If "question_type" is 1, options should be an empty list.

The questions should assess learners' needs or preferences relevant to the course topic. Do not ask dumb questions that the user has already implicitly answered in their description.

The output should be in the following format:
[
    {{"question": "question1", "question_type": 0, "options": ["option1", "option2", "option3"]}},
    {{"question": "question2", "question_type": 1, "options": []}}
]

Please create at least 2 questions, using multiple choice where possible, but ensure the questions are relevant and non-repetitive based on the description.
"""


    # Run the prompt with Llama 3.1 model
    response = client.invoke(prompt)

    # Parse the response JSON and return it
    return response if response else []

# Example usage:
course_data = {
    "title": "Introduction to Python",
    "description": "A beginner course covering Python programming fundamentals.",
    "category": "Programming"
}
def generate_overview(course_details):
    # Initialize the Ollama client
    client = OllamaLLM(model="llama3:latest")
    print(course_details)
    # Define the prompt based on the course details
    prompt = f"""
<<SYS>>you are a course making assistant. Always provide the output in list of modules format of python consistently. Do not include extra lines like "Here are the generated questions in a list of dictionaries as per your request" or "Let me know if you need more!"</SYS>
Given the following course details in JSON format:
{course_details}
Your task is to generate a list of modules.

For each module, include:
- "module": A relevant question based on the course details.
- "module_type": 0 for content-type and 1 for quiz-type and 2 for project-type.
- "module decription": description for the module.

The modules should satisfy learners' needs and personility or preferences relevant to the course topic.

The output should be in the following format:
[
    {{"module": "module1", "question_type": 0, "module_description": "description"}},
    
]

Please create at least 10 modules, using the modules types when it is possible, but ensure the modules are relevant and non-repetitive based on the description.
"""


    # Run the prompt with Llama 3.1 model
    response = client.invoke(prompt)

    # Parse the response JSON and return it
    return response if response else []
def generate_course(module_details):
    # Initialize the Ollama client
    client = OllamaLLM(model="llama3:latest")
    obj  = generate_overview(module_details)
    # Define the prompt based on the course details
    prompt = f"""
<<SYS>>you are a course making assistant. Do not include extra lines like "Here are the generated questions in a list of dictionaries as per your request" or "Let me know if you need more!"</SYS>
Given the following course details in JSON format:
{module_details}
Your task is to create courses with respect to its type.

The output should be in the html with imbeded with css and js format:
"""


    # Run the prompt with Llama 3.1 model
    response = client.invoke(prompt)

    # Parse the response JSON and return it
    return response if response else []



questions = generate_questions(course_data)
