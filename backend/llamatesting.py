from langchain_ollama import OllamaLLM

def generate_questions(course_details):
    # Initialize the Ollama client
    client = OllamaLLM(model="llama3:latest")

    # Define the prompt based on the course details
    prompt = f"""
    <<SYS>>you are helpful assigntant.always provide the output in list format of python< consistently.no extra lines like "Here are the generated questions in a list of dictionaries as per your request:","Let me know if you need more!"</SYS>>
    Given the following course details in JSON format:
    {{
        "title": "{course_details['title']}",
        "description": "{course_details['description']}",
        "category": "{course_details['category']}"
    }}

    Generate a list of dictionaries, each containing:
    - "question": a relevant question based on the course details.
    - "question_type": 0 for multiple choice questions and 1 for user input questions.
    - "options": a list of answer options if "question_type" is 0. If "question_type" is 1, options should be an empty list.

    The questions should assess learners' needs, prior knowledge, or preferences relevant to the course topic for generating a course using it.need to pick appropriate question type for type of question you need.
    The output should be in the following format:
    [
        {{"question": "question1", "question_type": 0, "options": ["option1", "option2", "option3"]}},
        {{"question": "question2", "question_type": 1, "options": []}}
    ]

    Create at least 2 questions, using multiple choice where possible.
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

questions = generate_questions(course_data)
