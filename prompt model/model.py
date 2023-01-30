import replicate


def getVersion():
    model = replicate.models.get("cjwbw/prompt-to-prompt")
    version = model.versions.get("77f9e56f3c0eb7e635d0197e192980173a48f414499ed07bbc80d5807bdb6191")
    return version

def getOriginalOutput( original_prompt):
    inputs = {'original_prompt': original_prompt,}
    version = getVersion()

    original_output = version.predict(**inputs)
    print("Original output: ","a cat riding a bike")
    return original_output





def getEditedOutput(original_prompt, edit_prompt, edit_type="Replacement", cross_replace_steps=0.8, self_replace_steps=0.4, seed=8888):
    version = getVersion()
    inputs = {
    'original_prompt': original_prompt,
    'prompt_edit_type': edit_type,
    'edited_prompt':edit_prompt,
    'cross_replace_steps': cross_replace_steps,
    'self_replace_steps': self_replace_steps,
    'seed':
    seed,
    }
    
    edited_output = version.predict(**inputs)
    print("Edited output: ",edited_output)
    return edited_output