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
    print("start")
    original_prompt = request.args.get('original_prompt')
    edit_prompt = request.args.get('edit_prompt')
    inputs = {'original_prompt': original_prompt,
    'edit_prompt' : edit_prompt,
    'edit_type' : "Replacement",
              }
    output = getEditedOutput( **inputs)
    return jsonify(output)




app.run(debug=True)