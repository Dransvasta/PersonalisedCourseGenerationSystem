from flask import Flask,request,jsonify
from llamatesting import generate_questions
app = Flask(__name__)

@app.route("/getquestions",methods=['POST'])
def getquestions():
    json_body = request.get_json()
    return jsonify(generate_questions(json_body))

if __name__=="__main__":
    app.run(debug=True)
