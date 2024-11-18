from flask import Flask,request,jsonify
from flask_cors import CORS
from llamatesting import generate_questions,generateoverview
app = Flask(__name__)
CORS(app)

@app.route("/getquestions",methods=['POST'])
def getquestions():
    json_body = request.get_json()
    print(json_body)
    return jsonify(generate_questions(json_body))
@app.route("/getoverview",methods=['POST'])
def getoverview():
    json_body = request.get_json()
    print(json_body)
    return jsonify(generateoverview(json_body))
if __name__=="__main__":
    app.run(debug=True)
