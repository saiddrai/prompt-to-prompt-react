from flask import Flask, request, jsonify
from os import environ
PORT = environ.get('PORT', 5000)
from model import  getOriginalOutput, getEditedOutput
from flask_cors import CORS


app = Flask(__name__)
CORS(app)



# routes

@app.route('/original', methods=['GET'])
def predict():
    print("start")
    original_prompt = request.args.get('original_prompt')
    print(original_prompt)
    output = getOriginalOutput(original_prompt)
    print(output)
    return jsonify(output)


@app.route('/edit', methods=['GET'])
def edit():
    data = request.get_json()
    inputs = {'original_prompt': data['original_prompt'],
    'edit_prompt' : data['edit_prompt'],
    'edit_type' : data['edit_type']
              }
    output = getEditedOutput( **inputs)
    return jsonify(output)




app.run(debug=True)