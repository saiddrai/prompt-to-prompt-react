from flask import Flask, request, jsonify
from os import environ
PORT = environ.get('PORT', 5000)
from model import  getOriginalOutput, getEditedOutput


app = Flask(__name__)



# routes

@app.route('/original', methods=['GET'])
def predict():
    data = request.get_json()
    print("start")
    original_prompt = data['original_prompt']
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