from flask import Flask, request, jsonify
from os import environ
PORT = environ.get('PORT', 5000)
from model import getVersion, getOriginalOutput, getEditedOutput


app = Flask(__name__)
app.config['SERVER_NAME'] = f'localhost:{PORT}'
app.run()


version = getVersion()

# routes

@app.route('/initial', methods=['POST'])
def predict():
    data = request.get_json()
    original_prompt = data['original_prompt']
    output = getOriginalOutput(version , original_prompt)
    print(output)
    return jsonify(output)

@app.route('/edit', methods=['GET'])
def edit():
    data = request.get_json()
    edit_prompt = data['edit_prompt']
    edit_type = data['edit_type']
    output = getEditedOutput(version, edit_prompt, edit_type)
    return jsonify(output)





# route for editing the prompt

# model = replicate.models.get("replicate/resnet")
# version = model.versions.get("dd782a3d531b61af491d1026434392e8afb40bfb53b8af35f727e80661489767")
# version.predict(image=open("mystery.jpg", "rb"))
# # or...
#  model.predict(image="https://example.com/mystery.jpg")



# model = replicate.models.get("pixray/text2image")
# version = model.versions.get("5c347a4bfa1d4523a58ae614c2194e15f2ae682b57e3797a5bb468920aa70ebf")
# for image in version.predict(prompts="robots talking to robots"):
#   print(image)

